import React from 'react'
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 600px;
  margin: auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

const ButtonGroup = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background-color: #add8e6; // light blue
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: #808080; // grey
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Add = () => {
    return (
        <Form>
          <FormGroup>
            <label>End Year</label>
            <input type="text" name="endYear" />
          </FormGroup>
          <FormGroup>
            <label>Intensity</label>
            <input type="text" name="intensity" />
          </FormGroup>
          <FormGroup>
            <label>Sector</label>
            <input type="text" name="sector" />
          </FormGroup>
          <FormGroup>
            <label>Topic</label>
            <input type="text" name="topic" />
          </FormGroup>
          <FormGroup>
            <label>Insight</label>
            <input type="text" name="insight" />
          </FormGroup>
          <FormGroup>
            <label>URL</label>
            <input type="text" name="url" />
          </FormGroup>
          <FormGroup>
            <label>Region</label>
            <input type="text" name="region" />
          </FormGroup>
          <FormGroup>
            <label>Start Year</label>
            <input type="text" name="startYear" />
          </FormGroup>
          <FormGroup>
            <label>Impact</label>
            <input type="text" name="impact" />
          </FormGroup>
          <FormGroup>
            <label>Added</label>
            <input type="text" name="added" />
          </FormGroup>
          <FormGroup>
            <label>Published</label>
            <input type="text" name="published" />
          </FormGroup>
          <FormGroup>
            <label>Country</label>
            <input type="text" name="country" />
          </FormGroup>
          <FormGroup>
            <label>Relevance</label>
            <input type="text" name="relevance" />
          </FormGroup>
          <FormGroup>
            <label>Pestle</label>
            <input type="text" name="pestle" />
          </FormGroup>
          <FormGroup>
            <label>Source</label>
            <input type="text" name="source" />
          </FormGroup>
          <FormGroup>
            <label>Title</label>
            <input type="text" name="title" />
          </FormGroup>
          <FormGroup>
            <label>Likelihood</label>
            <input type="text" name="likelihood" />
          </FormGroup>
          <ButtonGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
            <CancelButton type="button">Cancel</CancelButton>
          </ButtonGroup>
        </Form>
     );    
}

export default Add;