import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Select,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdAdd,
  MdDashboard,
  MdPerson,
  MdSettings,
  MdExitToApp,
} from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    end_year: '',
    intensity: '',
    sector: '',
    topic: '',
    insight: '',
    url: '',
    region: '',
    start_year: '',
    impact: '',
    added: '',
    published: '',
    country: '',
    relevance: '',
    pestle: '',
    source: '',
    title: '',
    likelihood: ''
  });

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const navigate = useNavigate();

  const countries = [
    'USA', 'Canada', 'Mexico', 
  ];

  const [data, setData] = useState([]);

  
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:4000";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
    fetchDataFromApi();
  }, []);

  // Post data to API
  const postDataToApi = async (dataToPost) => {
    const API_URL = "http://localhost:4000";
    try {
      const response = await axios.post(`${API_URL}/api/data`, dataToPost);
      console.log('Data posted successfully:', response.data);
      alert('Data added successfully'); // Display success alert
      navigate('/'); // Navigate to the main page
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleAddData = (event) => {
    event.preventDefault();
    postDataToApi(formData);
    handleCloseModal();
    window.location.href = '/'
  };

  return (
    <>
      <Drawer placement="left" isOpen={true} onClose={onClose} isFullHeight={true} zIndex={1}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
          maxW="250px"
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
          >
            {/* Optionally, you can keep a header here */}
            Admin Dashboard
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <Divider
              mb={4}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />

            <List spacing={3}>
              <ListItem cursor="pointer">
                <ListIcon as={MdAdd} fontSize="xl" />
                Add Data
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdDashboard} fontSize="xl" />
                Dashboard
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdPerson} fontSize="xl" />
                Profile
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdSettings} fontSize="xl" />
                Settings
              </ListItem>
              <ListItem cursor="pointer" onClick={onClose}>
                <ListIcon as={MdExitToApp} fontSize="xl" />
                Logout
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Modal for Add Data */}
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent w="80%" maxW="1000px">
          <ModalHeader>Add Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleAddData}>
              <Flex wrap="wrap" justify="space-between" spacing={4}>
                {Object.keys(formData).map((key) => (
                  <Box key={key} w={['100%', '50%', '30%']} mb={4}>
                    <div>
                      <label>{key.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase())}</label>
                      {key === 'country' ? (
                        <Select name={key} value={formData[key]} onChange={handleInputChange} style={{ border: '1px solid grey', borderRadius: '5px', width: '100%' }}>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </Select>
                      ) : (
                        <Input type="text" name={key} value={formData[key]} onChange={handleInputChange} style={{ border: '1px solid grey', borderRadius: '5px', width: '100%' }} />
                      )}
                    </div>
                  </Box>
                ))}
              </Flex>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit" onClick={handleAddData} mr={5} style={{ height: '30px' }}>
              Submit
            </Button>
            <Button colorScheme="teal" bg="gray.300" color="black" onClick={handleCloseModal} style={{ height: '30px' }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminDashboard;
