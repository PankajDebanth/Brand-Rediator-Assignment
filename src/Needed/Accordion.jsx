import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
const data = [
  {
    icon: <HiShieldCheck/>,
    heading: "About the Web App",
    detail:
      "Learn more about this web app, including its purpose, functionality, and how it was created..",
  },
  {
    icon: <MdCancel />,
    heading: "Popular inquiries",
    detail:
      "Find answers to some of the most commonly asked questions about the web app, including how to use it, what types of questions it can answer, and more",
  },
  {
    icon: <MdAnalytics />,
    heading: "Contact Information",
    detail:
      "If you want to access the admin page, you'll first need to register yourself on the contact page. Simply enter your name and email, and then you'll be able to access the dashboard where you can view the names and emails that have been entered as suggested me throught email.",
  },
];
export default data;