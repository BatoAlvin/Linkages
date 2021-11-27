import { Divider } from '@material-ui/core'
import React from 'react'
import Border from '../components/Border/Border'
import Heading from '../components/Header/Header'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import {ParagraphBasic} from '../components/Paragraph/Paragraph'
import Tags from '../components/Tags/Tags'
import ProfileCard from '../components/ProjectCard/ProjectCard'
import {ButtonOutlined} from '../components/Button/Button'


function profilepage() {
    return (
        <div style={{maxWidth:'100', margin:'auto auto'}}>
            <ProfileHeader/>
            <Heading title="Bio"/>
            <ParagraphBasic text="John Magele is a Web developer professional and Techmunch, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers.
            John Magele is a Web developer professional and Techmunch, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers"/>
            <Border/>

            <Heading title="Technical Skills"/>
            <Tags text="CSS"/>
            <Border/>

            <Heading title="Other Skills"/>
            <Tags text="Express JS"/>
            <Border/>

            <Heading title="Certifications"/>
            <Tags text="Product managment"/>
            <Border/>
            
            {/* <Heading title="Projects"/> */}
            {/* <ProfileCard/> */}
            {/* <Border/> */}

            {/* <Heading title="Resume"/> */}
            <ButtonOutlined text="View Resume"/>

        </div>
    )
}

export default profilepage
