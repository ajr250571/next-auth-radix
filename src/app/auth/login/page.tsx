import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";

function LoginPage() {
  return (
    <div>
      LoginPage
      <Button>
        <PersonIcon width="16" height="16" /> Login
      </Button>
    </div>
  );
}

export default LoginPage;
