import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import Image from "next/image";
import WorkIcon from '@material-ui/icons/Work';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';

export const lms = [
    {
        list: "View all jobs",
        link:"/",
        icon: <PeopleIcon style = {{fill: '#41AD48'}}/>
    },
    {
        list: "Create Profile",
        link:"/createprofile", 
        icon: <WorkIcon style = {{fill: '#41AD48'}}/>
    },
    {
        list: "All Profiles",
        link:"/allprofiles",
        icon: <WorkIcon style = {{fill: '#41AD48'}}/>
    },
 
] 
   