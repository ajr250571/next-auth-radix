import SigninForm from "@/app/components/auth/SigninForm";
import { Card, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import React from "react";
import NavLink from "next/link";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-1">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading my="4">Login</Heading>
            <SigninForm />
            <Flex justify="between" my="4">
              <Text>Don`t have as account?</Text>
              <Link asChild>
                <NavLink href="/auth/register" passHref>
                  Register
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
