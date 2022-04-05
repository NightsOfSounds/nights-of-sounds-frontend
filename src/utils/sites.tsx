import { EmojiPeople, Handyman, Home as House, LocalShipping, PhoneIphone } from "@mui/icons-material";
import About from "../pages/About/About";
import Equipment from "../pages/Equipment/Equipment";
import Home from "../pages/Home/Home";
import Imprint from "../pages/Imprint/Imprint";
import Partner from "../pages/Partner/Partner";
import Privacy from "../pages/Privacy/Privacy";
import Social from "../pages/Social/Social";

export const sites = [
    {
      path: "/",
      name: "home.button",
      element: <Home/>,
      icon: <House/>,
      navigation: true,
    }, {
      path: "/about/",
      name: "about.button",
      element: <About/>,
      icon: <EmojiPeople/>,
      navigation: true,
    }, {
      path: "/social/",
      name: "social.button",
      element: <Social/>,
      icon: <PhoneIphone/>,
      navigation: true,
    }, {
      path: "/partner/",
      name: "partner.button",
      element: <Partner/>,
      icon: <LocalShipping/>,
      navigation: true,
    }, {
      path: "/equipment/",
      name: "equipment.button",
      element: <Equipment/>,
      icon: <Handyman/>,
      navigation: true,
    }, {
      path: "/imprint/",
      name: "",
      element: <Imprint/>,
      icon: <></>,
      navigation: false,
    }, {
      path: "/privacy/",
      name: "",
      element: <Privacy/>,
      icon: <></>,
      navigation: false,
    },
  ]