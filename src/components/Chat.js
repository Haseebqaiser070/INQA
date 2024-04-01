import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Iconify from './iconify/Iconify';
import { Navigate, useNavigate } from 'react-router-dom';
import { useChat } from './ChatContext'; // Import the useChat hook

const Review = ({ steps }) => {
  const [state, setState] = useState({
    name: '',
    gender: '',
    age: '',
  });

  useEffect(() => {
    const { name, gender, age } = steps;
    setState({ name, gender, age });
  }, [steps]);

  const { name, gender, age } = state;

  return (
    <div style={{ width: '100%' }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#00A4DB',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00A4DB',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const floatingStyle = {
  backgroundColor: '#00A4DB',
  width: '100%',
  maxWidth: '350px',
  borderRadius: '2px',
  padding: '0px',
  textDecoration: 'none',
  height: '35px',
};
const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! What is your gender?',
    trigger: 'gender',
  },
  {
    id: 'gender',
    options: [
      { value: 'male', label: 'Male', trigger: '5' },
      { value: 'female', label: 'Female', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'How old are you?',
    trigger: 'age',
  },
  {
    id: 'age',
    user: true,
    trigger: '7',
    validator: (value) => {
      if (isNaN(value)) {
        return 'value must be a number';
      } else if (value < 0) {
        return 'value must be positive';
      } else if (value > 120) {
        return `${value}? Come on!`;
      }

      return true;
    },
  },
  {
    id: '7',
    message: 'Great! Check out your summary',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <Review />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update some field?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'What field would you like to update?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'name', label: 'Name', trigger: 'update-name' },
      { value: 'gender', label: 'Gender', trigger: 'update-gender' },
      { value: 'age', label: 'Age', trigger: 'update-age' },
    ],
  },
  {
    id: 'update-name',
    update: 'name',
    trigger: '7',
  },
  {
    id: 'update-gender',
    update: 'gender',
    trigger: '7',
  },
  {
    id: 'update-age',
    update: 'age',
    trigger: '7',
  },

  {
    id: 'end-message',
    message: 'Do you want to schedule a meeting?',
    trigger: 'meeting-options',
  },
  {
    id: 'meeting-options',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'redirect' },
      { value: 'no', label: 'No', trigger: 'thanks' },
    ],
  },
  {
    id: 'thanks',
    message: 'Thanks! Your data was submitted successfully!',
  },
  {
    id: 'redirect',
    message: 'Im redirecting you to the contact page.!',
    end: true,
  },
];

export default function Chat() {
  const { opened, setOpened } = useChat();
  const navigate = useNavigate();
  const toggleFloating = (opened) => {
    setOpened(opened);
  };

  const FLoatinIcon = () => {
    return (
      <div
        className="w-100 my-0 py-0 d-flex align-items-center justify-content-center text-white text-decoration-none"
        onClick={() => toggleFloating(true)}
      >
        <Iconify icon="raphael:chat" />
        <Typography className="ms-2 my-0 py-0 text-decoration-none"> Mehr Fragen? Chatte mit uns!</Typography>
      </div>
    );
  };

  const ChatHeader = ({ toggleFloating }) => {
    return (
      <>
        <div className="container-fluid bg-white py-2">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <img width="45px" height="45px" src="/assets/images/avatars/bot-avatar.png" alt="Bot Avatar" />
              <Typography className="fs-5 ms-2">Laui</Typography>
            </div>
            <div className="col ms-2 d-flex align-items-center justify-content-between">
              <Typography className="fs-4 ms-2">Chatte mit uns!</Typography>
              <Iconify role="button" onClick={() => toggleFloating(false)} icon="typcn:minus" className="text-muted" />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='chat-wrapper' >
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={() => navigate('/contact')}
          floatingIcon={<FLoatinIcon />}
          floating={true}
          botAvatar={'/assets/images/avatars/bot-avatar.png'}
          hideUserAvatar={true}
          steps={steps}
          opened={opened}
          floatingStyle={floatingStyle}
          toggleFloating={() => toggleFloating(true)}
          headerComponent={<ChatHeader toggleFloating={toggleFloating} />}
        />
      </ThemeProvider>
    </div>
  );
}
