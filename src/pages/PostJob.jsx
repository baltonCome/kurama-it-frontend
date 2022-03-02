/*
Bro, in case of you don't understand something in this block futurely, just know that the only one that can outsmart me is you, cuz you are the only and unique better version of me!
Keep Coding...
*/

import { useState, useEffect, useRef } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
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
    const [negotiable, setNegotiable] = useState(false);
    const [salaryPerTime, setSalaryPerTime] = useState('');
    const [salary, setSalary] = useState(0);
    const [requiredSkills, setRequiredSkills] = useState('');
    const [description, setDescription] = useState('');
    const [skillExplainFocus, setSkillExplainFocus] = useState(false);
    const [descriptionFocus, setDescriptionFocus] = useState(false);
    const skillsRef = useRef();
    const descriptionRef = useRef();

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

    const salaryPerTimeOptions = [
        { value: 'Hour', label: 'Hourly' },
        { value: 'Week', label: 'Weekly' },
        { value: 'Month', label: 'Monthly' },
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

    useEffect(() => {

        if(negotiable === true){
            setSalary('')
        } 
    },[negotiable])

    useEffect(() => {

        skillsRef.current.focus();
        descriptionRef.current.focus();
    },[])

    const handleSubmit = () =>{

    }

    return (
        <div className="my-5">
            <Container>
                <Card className="border-0">
                    <Card.Body className="p-2">   
                        <div className="text-center mb-5">
                            <h2 className="fw-bold mb-1"> Find The Right Professional </h2>
                            <p> Try to be precise with the description so you can find the perfect one! </p>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md={3}>
                                    <h5 className='fw-bold'> Job Information </h5>
                                    <p className='small text-muted'>
                                        Be as much explicit as possible in this section, this is the first thing the other candidates will see!
                                    </p>
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
                                                    required
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
                                    <p className='small text-muted'>
                                        How is the interaction going to be?!
                                    </p>
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
                                                        required
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
                                    <p className='small text-muted'>
                                        Where, and which kind of candidate are you searching!
                                    </p>
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
                            <Row className="mb-3">
                                <Col md={3}>
                                    <h5 className='fw-bold'> Salary </h5>
                                    <p className='small text-muted'>
                                        Set the payment that you are willing to give, or leave it as negotiable!
                                    </p>
                                </Col>
                                <Col md={9}> 
                                    <Row>
                                        <Col sm={6}>
                                            <FloatingLabel 
                                                controlId='' 
                                                label="Payment in $USD"
                                                className="mb-3"
                                                >
                                                <Form.Control 
                                                    type="number"
                                                    value={salary}
                                                    step="0.5"
                                                    disabled={negotiable}
                                                    onChange={(e) => setSalary(e.target.value)}>
                                                </Form.Control>
                                            </FloatingLabel>
                                        </Col>
                                        <Col sm className="mb-3">
                                            <Select
                                                defaultValue={salaryPerTimeOptions[0]}
                                                onChange={setSalaryPerTime}
                                                options={salaryPerTimeOptions}     
                                                placeholder={'Payment interval'}
                                                isSearchable={true}
                                            />
                                        </Col>
                                        <Col sm>
                                            <Form.Check
                                                name="Negotiable"
                                                type='checkbox'
                                                onChange={(e) => setNegotiable(!negotiable)}
                                                className="mb-3"
                                                label="Negotiable"
                                                value={negotiable}
                                            /> 
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={3}>
                                    <h5 className='fw-bold'> Job Description </h5>
                                    <p className='small text-muted'>
                                        Add some skills that are important for the job and describe in as much details as possible, in this way you will get more qualified and filtered applications!
                                    </p>
                                </Col>
                                <Col md={9}>
                                    <Row>
                                        <Col md={12} className="mb-3">
                                            <FloatingLabel 
                                                controlId='' 
                                                label="Required Skills"
                                                className="mb-3"
                                                >
                                                <Form.Control 
                                                    type="text"
                                                    value={requiredSkills}
                                                    onChange={(e) => setRequiredSkills(e.target.value)}
                                                    onFocus={ () => setSkillExplainFocus(true)}
                                                    onBlur={ () => setSkillExplainFocus(false)}
                                                    ref={skillsRef}
                                                    >
                                                </Form.Control>
                                                <p className= {skillExplainFocus && requiredSkills ? "small text-muted" : "d-none" }>
                                                    Separate each skill using comma[,]. Eg: communication, Marketing,...! 
                                                </p>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md={12} className="mb-3">
                                            <FloatingLabel 
                                                controlId='' 
                                                label="Description"
                                                className="mb-3"
                                                >
                                                <Form.Control 
                                                    style = {{ height: "150px"}}
                                                    as="textarea"
                                                    required
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    onFocus={ () => setDescriptionFocus(true)}
                                                    onBlur={ () => setDescriptionFocus(false)}
                                                    ref={descriptionRef}>
                                                </Form.Control>
                                                <p className= { descriptionFocus && (description.length < 199) ? "small text-muted" : "d-none" }>
                                                    Be exhaustive, write at least 200 Characters!
                                                </p>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="primary" type="submit">
                                            Post Job
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default PostJob;