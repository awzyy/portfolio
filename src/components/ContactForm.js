// ContactForm.js
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4} align="flex-start">
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Message:</FormLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
      </FormControl>
      <Button type="submit" colorScheme="teal">
        Submit
      </Button>
    </VStack>
  );
};

export default ContactForm;
