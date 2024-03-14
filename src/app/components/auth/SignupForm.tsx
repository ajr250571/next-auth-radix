"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import React from "react";

function SignupForm() {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="email">Name</label>
      <TextField.Root>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input type="text" placeholder="Write your Name" autoFocus />
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input type="email" placeholder="email@domain.com" />
      </TextField.Root>

      <label htmlFor="email">Password</label>
      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input type="password" placeholder="******" />
      </TextField.Root>
      <Button>Sign In</Button>
    </Flex>
  );
}

export default SignupForm;
