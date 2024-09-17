import { useState } from "react";
import AvatarCom from "./AvatarCom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";
// import { LogoIcon } from "./Icons";
import { useUser } from '@clerk/clerk-react';
// import { Link } from "react-router-dom";



interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/community",
    label: "Community",
  },
  {
    href: "/workshops",
    label: "Workshops",
  },
  {
    href: "/sessions",
    label: "Sessions"
  }
];



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useUser();
  return (
    <header className="sticky border-b-[1px] top-0  z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="ml-2 font-bold text-xl flex gap-2 justify-center items-center"
            >
              <img src="/logo.svg" alt="" className="h-12 w-12" />
              <h1 className="text-textsecond font-extrabold text-xl">CareerQuest</h1>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex justify-center items-center gap-4 md:hidden">

            {/* <ModeToggle /> */}
            {user ? (
              <AvatarCom />
            ) : (
              <Link
                to="/sign-in"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
              >
                Sign in
              </Link>
            )}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="p-1 rounded-md border-2 ">
                <Menu
                  className="flex md:hidden h-6 w-6 "
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <Link
                    rel="noreferrer noopener"
                    to="/"
                    className="ml-2 font-bold text-xl flex gap-2 justify-center items-center"
                  >
                    <img src="/logo.svg" alt="" className="h-12 w-12" />
                    <h1 className="text-textsecond font-extrabold text-xl">CareerQuest</h1>
                  </Link>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}

                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 justify-center items-center">

            {user ? (
              <AvatarCom />
            ) : (
              <div className=" flex justify-center items-center gap-3">
                <Link
                  to="/sign-in"
                  className="bg-teal-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Sign in

                </Link>
                <Link to='/sign-up' className="border-2 border-teal-600 text-teal-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  Sign up
                </Link>
              </div>
            )}


            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
