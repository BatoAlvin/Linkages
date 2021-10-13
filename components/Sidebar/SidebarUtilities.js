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
        list: "Profiles",
        link:"/profiles",
        icon: <WorkIcon style = {{fill: '#41AD48'}}/>
    },
    {
        list: "Overview",
        link:"/workoverview",
        icon: <MultilineChartIcon style = {{fill: '#41AD48'}}/>
    },
 
] 
