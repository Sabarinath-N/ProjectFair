import React, { useEffect, useState } from 'react'
import Projects from './Projects'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import { allProjectsApi } from '../services/allApis'

function Landing() {
    const [logState, setLogState] = useState()
    const [samples, setSamples] = useState([])

    useEffect(() => {
        getData()
        if (sessionStorage.getItem("token")) {
            setLogState(true)
        }
        else {
            setLogState(false)
        }
    }, [])

    const getData = async () => {
        const response = await allProjectsApi()
        console.log(response);
        if (response.status == 200) {
            setSamples(response.data.slice(0, 3))
        }
        else {
            console.log(response);
        }
    }


    return (
        <>

            <Header />
            <div className="container-fluid">
                <div className="w-100 row" style={{ minHeight: "60vh" }}>
                    <div className="col-sm-12 col-md-6 p-5">
                        <h1>ProjectFair</h1>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis iusto libero alias. Suscipit dignissimos dolorem corporis inventore numquam saepe ad harum quidem, similique voluptates nostrum beatae dolore temporibus excepturi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, suscipit tenetur. Consequatur cupiditate delectus aperiam obcaecati ipsum voluptatem molestias, repellat consectetur. Soluta neque sint vitae ullam repudiandae a provident qui!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit fugit quidem aspernatur suscipit modi et expedita iusto dolores iure officia atque, perspiciatis laudantium facilis deserunt cum rerum? Molestias, exercitationem!
                        </p>
                        <div className='d-grid'>
                            {
                                logState ?
                                    <Link className='btn btn-success' to={'/dash'}> Go to Dashboard </Link>
                                    :
                                    <Link className='btn btn-warning' to={'/auth'}> Explore Now ...</Link>
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/desarrollador-web-masculino-haciendo-investigacion-sobre-desarrollo-5691622-4759504.png" alt="" />
                    </div>
                </div>
                <div className="w-100 my-5">
                    <h2>Projects You May Like</h2>
                    <div className="d-flex justify-content-around">
                        {
                            samples.length>0?
                            <>
                            {
                                samples.map(item=>(
                                    <ProjectCard project={item}/>
                                ))
                            }
                            </>
                            :
                            <h4 className="text-center text-danger">No Projects Available!!!</h4>
                        }
                        
                    </div>

                </div>
                <div className="text-center my-5">
                    <Link to={'/allprojects'}> Explore more...{'>>'}</Link>
                </div>
            </div>
        </>
    )
}

export default Landing
