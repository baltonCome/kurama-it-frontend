import { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import countriesApi from '../services/Countries';

const PostJob = () => {

    const [jobTitle, setJobTitle] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [timePeriod, setTimePeriod] = useState([]);
    const animatedComponents = makeAnimated();
    const [filteredStates, setFilteredStates] = useState([]);
    const [countryState, setCountryState] = useState([]);
    const [options, setOptions] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);

    const timePeriods = [
        { value: 'Full Time Job', label: 'Full Time Job' },
        { value: 'Part Time Job', label: 'Part Time Job' },
        { value: 'Freelance', label: 'Freelance' },
    ];

    const jobTypes = [
        { value: 'Remote', label: 'Remote' },
        { value: 'Partially Remote', label: 'Partially Remote' },
        { value: 'Not Remote', label: 'Not Remote' },
    ];

    const categories = [
        { value: 'Full Stack' ,label: 'Full Stack Developer' },
        { value: 'Back-End', label:'Back-End Developer' },
        { value: 'Front-End', label: 'Front-End Developer' },
        { value: 'Software Engineer', label: 'Software Engineer' },
        { value: 'Design', label: 'Designer' },
        { value: 'Network & Connections', label: 'Network & Connections Professional' },
        { value: 'Database', label: 'Database Manager'},
    ];

    useEffect(() => {

        const backend = [
            { value: 'Java', label: 'Java' },
            { value: 'PHP', label: 'PHP' },
            { value: 'Node', label: 'NodeJS' },
            { value: 'Laravel', label: 'Laravel' },
            { value: 'Spring', label: 'Spring' },
        ];

        const frontend = [
            { value: 'React', label: 'React' },
            { value: 'Vue', label: 'Vue' },
            { value: 'Angular', label: 'Angular' },
            { value: 'CSS', label: 'CSS' },
            { value: 'Bootstrap', label: 'Bootstrap' },
            { value: 'Tailwind',  label: 'Tailwind '},
        ];

        const softwareEng = [
            { value: 'Documentation', label: 'Documentation' },
            { value: 'Diagrams', label: 'Diagrams' },
            { value: 'Software Design', label: 'Software Design' },
            { value: 'Prototype', label: 'Prototyping' },
        ];

        const design = [
            { value: 'Corel Draw', label: 'Corel Draw' },
            { value: 'Adobe Photoshop', label: 'Adobe Photoshop' },
            { value: 'Figma', label: 'Figma' },
            { value: 'Adobe Ilustrator', label: 'Adobe Ilustrator' },
        ];

        const database = [
            { value: 'MySQL', label: 'MySQL' },
            { value: 'MongoDB', label: 'MongoDB' },
            { value: 'MariaDB', label: 'MariaDB' },
            { value: 'Oracle', label: 'Oracle' },
            { value: 'PostgreSQL', label: 'PostgreSQL' },
            { value: 'Cassandra', label: 'Cassandra '},
        ];

        const networkConnections = [
            { value: 'Servers', label: 'Servers' },
            { value: 'Proxy', label: 'Proxy Servers' },
            { value: 'Mail Servers', label: 'Mail Servers' },
            { value: 'Application Servers', label: 'Application Servers' },
        ];

        const other = [
            {value: 'Other', label : 'Other'},
        ];

        switch(category.value) {
            case 'Full Stack':
                setOptions(backend.concat(frontend,softwareEng, design, database, networkConnections, other));
                break;
            case 'Back-End':
                setOptions(backend.concat(other));
                break;
            case 'Front-End':
                setOptions(frontend.concat(other));
                break;
            case 'Software Engineer':
                setOptions(softwareEng.concat(other));
                break;
            case 'Network & Connections':
                setOptions(networkConnections.concat(other));
                break;
            case 'Design':
                setOptions(design.concat(other));
                break;
            case 'Database':
                setOptions(database.concat(other));
                break;
            default:
                setOptions([]);   
        }

    },[category])


    useEffect(() => {

        const anywhere = [{value : '', label: 'Anywhere'}];

        countriesApi.get('/states')
        .then((res) => {
            const filtered = res.data.data.map((c) => {
                return {value: c.name, label: c.name};
            })
            setFilteredCountries(anywhere.concat(filtered));
        })
        .catch(error=> console.log(error))
    },[])
    
    useEffect(() => {
        
        const selected = selectedCountry.value;
        countriesApi.post('/states',
            { country : selected }
        )
        .then((res) => {
            const filtered = res.data.data.states.map((s) => {
                return {value: s.name, label: s.name};
            })
            setFilteredStates(filtered);
        })
        .catch(error=>console.log(error))

    }, [selectedCountry])

    return (
    <>
        <Container>
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-1"> Find The Right Professional </h2>
                <p> Try to be precise with the description so you can find the perfect one! </p>
            </div>
            <Row className="mb-3">
                <Col md={3}>
                    <h5 className='fw-bold'> Job Information </h5>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={12} className="mb-3">
                            <FloatingLabel 
                                controlId='' 
                                label="Job Title"
                                className="mb-3"
                                >
                                <Form.Control 
                                    type="text"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}>
                                </Form.Control>
                            </FloatingLabel>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Select
                                defaultValue={category}
                                onChange={setCategory}
                                options={categories}
                                placeholder={'Job category'}
                            />
                        </Col>
                        <Col md={6} className="mb-3">
                            <Select
                                defaultValue={subcategory}
                                onChange={setSubcategory}
                                options={options}       
                                placeholder={'Choose the subcategory of the Job'}
                                isMulti={true}
                                components={animatedComponents}
                                isSearchable={true}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={3}>
                    <h5 className='fw-bold'> Job Type </h5>
                </Col>
                <Col md={9}> 
                    <Row>
                        {
                            jobTypes.map((type, index) => (
                                <Col sm>
                                    <Form.Check id={index}
                                        inline
                                        name="jobtypes"
                                        type='radio'
                                        onChange={(e) => setJobType(e.target.value)}
                                        label={type.label}
                                        value={type.value}
                                        className="mb-3"
                                    /> 
                                </Col>
                            )) 
                        }
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={3}>
                    <h5 className='fw-bold'>Time Period & Location</h5>
                </Col> 
                <Col md={9}>
                    <Row>
                        <Col sm className="mb-3">
                            <Select
                                defaultValue={timePeriod}
                                onChange={setTimePeriod}
                                options={timePeriods}
                                placeholder={'Choose the time period of the Job'}
                            />
                        </Col>  
                    </Row>
                    <Row>
                        <Col md className="mb-3">
                            <Select
                                defaultValue={selectedCountry}
                                onChange={setSelectedCountry}
                                options={filteredCountries}
                                placeholder={'Country'}
                                isSearchable={true}
                            />
                        </Col>
                        <Col md className="mb-3">
                            <Select
                                defaultValue={countryState}
                                onChange={setCountryState}
                                options={filteredStates}     
                                placeholder={'State'}
                                isSearchable={true}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PostJob;