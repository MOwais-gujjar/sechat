"use client";

import { FC, ReactNode } from "react";
import { ClerkProvider, useAuth, SignInButton } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

import { dark, neobrutalism } from "@clerk/themes";

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!;
const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!CLERK_PUBLISHABLE_KEY) {
  console.log("Publishable key not exist ");
}
const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: [dark, neobrutalism],
      }}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className=" flex flex-col justify-center items-center space-x-5 m-auto h-screen bg-gray-600">
            <Image
              src={"/icons/logo.png"}
              alt="sechat"
              width={200}
              height={200}
              className="object-cover"
            />
            <Button variant={"secondary"}>
              <SignInButton>
                <div className=" flex space-x-3 items-center">
                  <Mail />
                  <p>Login With Google</p>
                </div>
              </SignInButton>
            </Button>
          </div>
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
