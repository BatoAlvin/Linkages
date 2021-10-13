import Head from "next/head";
import styles from './../../styles/myClass.module.css'
//import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import {db} from './../../firebase/firebase'
import { getDoc,collection,doc} from "firebase/firestore";
import FlagIcon from '@material-ui/icons/Flag';



const Project = ({post}) => {
    return ( 
        <>
        <Head>
        <title>PROJECT</title>
      </Head>
        <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          
          <div className = {styles.projectSection}>
            <div className = {styles.projectHeader1}>
                <h3>CLASSWORK</h3>
            </div>
            <div className = {styles.projectHeader2}>
                <div className = {styles.projectHeaderSec1}>
                   
                    <div>
                    {post.map((post)=>(
                        <div key={post.id}>
                        <div className={styles.container}>
                        

     <h4 style = {{color: '#096691',fontWeight: '900'}}>{post.coName}</h4>
     <p style = {{color:'#808080',fontWeight: '700'}}>{post.qualifications}</p>
     <p style = {{color:'black',fontWeight: 'bold'}}>{post.jobTitle} Points</p>
     <p style = {{color:'black',fontWeight: 'bold'}}>{post.jobCategory} Points</p>
     <p style = {{color:'black',fontWeight: 'bold'}}>{post.jobDescription} Points</p>
     <p style = {{color:'black',fontWeight: 'bold'}}>{post.deadline} Points</p>
     <p>Due Date: {post.location} </p>
                       
                        </div>
                        </div>
                  
                        ))}
                    </div>
                </div>
                <div className = {styles.projectHeaderSec2}>
                <FlagIcon style={{fill:'#41AD48'}}/>
                    <h4>PLEASE ALWAYS FOLLOW THE STANDARD PRINCIPLES WHILE CARRYING OUT YOUR PROJECTS.</h4>
                </div>
            </div>
          
        </div>
          </div>
          </div>
         
        </>
        
        
     );
}




   



export const getServerSideProps = async (context)=>{

    const docRef = doc(db, "jobs", context.params.id);
    const docSnap = await getDoc(docRef);

    const post = await docSnap.data()
    console.log(post)
    return{
        props: {
           post
        }
    }
}
  
  export default Project;
  

  

