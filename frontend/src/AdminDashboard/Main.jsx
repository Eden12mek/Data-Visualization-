import React, { useState, useEffect } from "react";
import {
  DrawerHeader,
  DrawerBody,
  Text,
  Divider,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  Input,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import { MdAdd, MdDashboard, MdPerson, MdSettings, MdExitToApp } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid, useColorModeValue } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";

Chart.register(CategoryScale);

const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState([]);
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
  // State to track the clicked item
  const [activeItem, setActiveItem] = useState(null);


  // Define the background color for the list item box
  const itemBoxBg = useColorModeValue('white', 'gray.800');
  const itemBoxHoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <ChakraProvider>

      <Flex direction="column">
        <Box
          py={2}
          bgGradient="linear(to-b, #072F49,#072F49 )"
          position="sticky"
          top={0}
          height={68}
          ml={200}

        >
          <Container maxW="container.lg">
            <Flex justify="space-between">
              <Box w="40%" ml={700} mt={2}  >
                <Input
                  type="text"
                  placeholder="Search..."
                  borderRadius="md"
                  bg={colorMode === "light" ? "white" : "gray.800"}
                  h={10}
                  py={1}

                  color={colorMode === "light" ? "gray.800" : "white"}
                  _placeholder={{
                    color: colorMode === "light" ? "gray.500" : "gray.300",
                  }}
                  _focus={{ outline: "none" }}
                />
              </Box>

            </Flex>
          </Container>
        </Box>
        {/* Sidebar */}
        <Box w="200px" h="100vh" bg="#2E4D61" position="fixed" color="white">
          <SettingsIcon mr={2} /> Admin Dashboard
          <Divider
            mt={10}
            mb={8}
            borderColor={useColorModeValue("gray.300", "gray.600")}
          />
          <List spacing={2}>
            <ListItem
              cursor="pointer"
            >
              <Box
                p={2}
                _hover={{ bg: itemBoxHoverBg }}
                borderRadius="md"
                display="flex"
                alignItems="center"
              >
                <ListIcon as={MdAdd} fontSize="xl" />
                <Text ml={2}>Menu</Text>
              </Box>
            </ListItem>

            <ListItem
              cursor="pointer"
              onClick={handleOpenModal}
            >
              <Box
                p={2}
                _hover={{ bg: itemBoxHoverBg }}
                borderRadius="md"
                display="flex"
                alignItems="center"
              >
                <ListIcon as={MdAdd} fontSize="xl" />
                <Text ml={2}>Add Data</Text>
              </Box>
            </ListItem>

            <ListItem
              cursor="pointer"
            >
              <Box
                p={2}
                _hover={{ bg: itemBoxHoverBg }}
                borderRadius="md"
                display="flex"
                alignItems="center"
              >
                <ListIcon as={MdDashboard} fontSize="xl" />
                <Text ml={2}>Dashboard</Text>
              </Box>
            </ListItem>
          </List>
        </Box>

        {/* Main Content */}
        <Flex ml="200px" direction="column" p={5}>
          <IntensityChart data={data} />
          <Flex direction={{ base: "column", md: "row" }} m={5}>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={2}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              borderRadius={20}
            >
              <RegionChart data={data} />
            </Box>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={2}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              borderRadius={20}
            >
              <TopicsRadarChart data={data} />
            </Box>
          </Flex>
          <RelevanceBubbleChart data={data} />
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            <Box>
              <PieChart data={data} />
            </Box>
            <Box>
              <LikelihoodRadarChart data={data} />
            </Box>
          </Grid>
          <CountryChart data={data} />
          <Footer/>
        </Flex>
      </Flex>

      {/* Modal for Add Data */}
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent mr={-60} w="90%" maxW="1000px">
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
    </ChakraProvider>

  );
};

export default Main;
