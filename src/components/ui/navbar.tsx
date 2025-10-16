import Image from "next/image";
import pseLogo from "@/public/Nav_Icon.webp";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => (
  <div className="bg-pse-purple-300 fixed top-0 right-0 left-0 z-50 border-b">
    <div className="flex items-center justify-between gap-4 px-6 py-2">
      <div className="flex items-center gap-8">
        <Image
          src={pseLogo}
          alt="Pi Sigma Epsilon Logo"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold tracking-wide text-white">
            ΠΣΕ
          </span>
          <span className="text-base text-white">Pi Sigma Epsilon</span>
        </div>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="bg-pse-purple-300 flex space-x-6 text-white">
          <NavigationMenuItem>
            <NavigationMenuLink>ABOUT US</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-pse-purple-300">
              MEMBERS
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-pse-purple-200 p-2 text-white">
              <NavigationMenuLink>E-BOARD</NavigationMenuLink>
              <NavigationMenuLink>Classes</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-pse-purple-300">
              EVENTS
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-pse-purple-200 p-2 text-white">
              <NavigationMenuLink>CALENDAR</NavigationMenuLink>
              <NavigationMenuLink>OVERVIEWS</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>GALLERY</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>NEWS LETTER</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>JOIN US</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Navbar;
