import { exact } from "prop-types";
import * as ROUTES from "../constants/routes";
import { Assessments, CareerPath, Help_and_Feeback, Home, Learning_Courses, Module_Library, Profile, Reports, Teams, Users, Whats_New } from "../pages";
import * as HiIcon from "react-icons/hi";
import * as BsIcon from "react-icons/bs";
import * as ImIcon from "react-icons/im";
import * as GoIcon from "react-icons/go";
import * as AiIcon from "react-icons/ai";
import * as CgIcon from "react-icons/cg";
import * as MdIcon from "react-icons/md";

export const SideBarNavs = [
  {
    name: "Dashboard",
    to: ROUTES.HOME,
    exact: "exact",
    element: <Home />,
    Icon: <HiIcon.HiDesktopComputer size={23} className="sidebar-icon" />,
  },
  {
    name: "Career Path",
    to: ROUTES.CAREER_PATH,
    element: <CareerPath />,
    Icon: <BsIcon.BsBarChartLine size={23} className="sidebar-icon" />,
  },
  {
    name: "Learning Course",
    to: ROUTES.LEARNING_COURSES,
    element: <Learning_Courses />,
    Icon: <ImIcon.ImBook size={23} className="sidebar-icon" />,
  },
  {
    name: "Assessments",
    to: ROUTES.ASSESSMENTS,
    element: <Assessments />,
    Icon: <HiIcon.HiOutlineSearch size={23} className="sidebar-icon" />,
  },
  {
    name: "Module Library",
    to: ROUTES.MODULE_LIBRARY,
    element: <Module_Library />,
    Icon: <GoIcon.GoFileSubmodule size={23} className="sidebar-icon" />,
  },
  {
    name: "Teams",
    to: ROUTES.TEAMS,
    element: <Teams />,
    Icon: <AiIcon.AiOutlineTeam size={23} className="sidebar-icon" />,
  },
  {
    name: "Users",
    to: ROUTES.USERS,
    element: <Users />,
    Icon: <AiIcon.AiOutlineUser size={23} className="sidebar-icon" />,
  },
  {
    name: "Reports",
    to: ROUTES.REPORTS,
    element: <Reports />,
    Icon: <HiIcon.HiDocumentReport size={23} className="sidebar-icon" />,
  },
  {
    name: "Profile",
    to: ROUTES.PROFILE,
    element: <Profile />,
    Icon: <CgIcon.CgProfile size={23} className="sidebar-icon" />,
  },
  {
    name: "Help and Feedback",
    to: ROUTES.HELP_AND_FEEDBACK,
    element: <Help_and_Feeback />,
    Icon: <MdIcon.MdLiveHelp size={23} className="sidebar-icon" />,
  },
  {
    name: "What's New",
    to: ROUTES.WHATS_NEW,
    element: <Whats_New />,
    Icon: <AiIcon.AiFillNotification size={23} className="sidebar-icon" />,
  },
];