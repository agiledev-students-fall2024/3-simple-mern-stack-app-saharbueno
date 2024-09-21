import { useState, useEffect } from 'react'
import axios from 'axios'
import loadingIcon from './loading.gif'

/**
 * A React component that represents a page about us
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {

    const [name, setName] = useState('');
    const [content, setContent] = useState([]);
    const [img, setImg] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');


    const fetchInfo = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
          .then(response => {
            const aboutus = response.data;
            setName(aboutus.name);
            setContent(aboutus.content);
            setImg(aboutus.img);
            
          })
          .catch(err => {
            const errMsg = JSON.stringify(err, null, 2);
            setError(errMsg);
          })
          .finally(() => {
            setLoaded(true);
          })
    }

    useEffect(() => {
        fetchInfo()
    }, []) 

    return (
        <>
            <h1>about {name}</h1>

            {content.map((text, index) => (
                <div key={index}>{text}</div>
            ))}

            <img src={img} alt="Picture of me"/>

            {error && <p>{error}</p>}
            {!loaded && <img src={loadingIcon} alt="loading" />}
        </>
    )
}

// make this component available to be imported into any other file
export default AboutUs
