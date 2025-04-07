"use client";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";

const Contact = () => {
  const initValues = { name: "", email: "", message: "" };
  const initState = { isLoading: false, error: "", values: initValues };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const onSubmit = async () => {
    if (!isValidEmail(values.email)) {
      toast({
        title: "Please enter a valid email address!",
        status: "error",
        duration: 2000,
        position: "top",
      });
      return;
    }
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setIsSubmitted(true);
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      toast({
        title: "Error! Please try again.",
        status: "error",
        duration: 2000,
        position: "top",
      });
    }
  };
  return (
    <section
      id="contact"
      className="min-h-[80svh] flex justify-center items-center w-full text-[#ffffff]"
    >
      <Container
        maxW="450px"
        mt={12}
        textAlign="center"
        fontSize="2xl"
        p="1em"
        className="my-[20px]"
      >
        <Heading className="mb-8">
          <span className="text-white font-aldrich">Contact </span>{" "}
          <span className="text-purpleSecondary font-aldrich">Us</span>
        </Heading>
        {/* <div className={`${isSubmitted ? "hidden" : ""}`}> */}
        <div>
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              background="white"
              color="black"
              placeholder="Enter your name"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              background="white"
              color="black"
              placeholder="Enter your email"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              background="white"
              color="black"
              placeholder="Enter your message"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            isDisabled={!values.name || !values.email || !values.message}
            colorScheme="linkedin"
            isLoading={isLoading}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
