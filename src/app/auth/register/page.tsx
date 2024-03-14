import SignupForm from "@/app/components/auth/SignupForm";
import { Card, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import React from "react";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-1">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading my="4">Register</Heading>
            <SignupForm />
            <Flex justify="between" my="4">
              <Text>Already have an account?</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Login
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
