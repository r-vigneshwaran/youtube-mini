import React, { useState } from 'react'
import { fetchData } from './components/api/fetchData';
import SearchIcon from '@material-ui/icons/Search';
import Videos from './components/Videos'
import YouTubeIcon from '@material-ui/icons/YouTube';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from 'react-bootstrap/Table'

const App = () => {
    const [result, setResult] = useState({});
    const [query, setQuery] = useState('');


    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchData(query);
            setResult(data)
            setQuery('');
            // console.log(result)
        }
    }
    return (
        <div>
        <CssBaseline/>
            <div className="heading" >
            <h1 >Youtube Mini</h1>
            </div>
          <Table striped bordered hover style={{width:'500px',height:'25px',margin:'0 auto',display:'block'}} >
                <thead>
                    <tr></tr>
                    <tr>
                    <th><YouTubeIcon color='secondary' fontSize='large'/></th>
                    <th><input type='text' className='search' style={{width:'400px',height:'25px'}} placeholder="Search... " value={query} onChange={(e) => {
                        setQuery(e.target.value);
                        console.log(e.target.value)
                        }}  onKeyPress={search} /></th>
                        <th><SearchIcon onClick={async () => {
                            const data = await fetchData(query);
                            setResult(data)
                            setQuery('');
                        }} color='secondary'/></th>
                    </tr>
                </thead>
           </Table>
                
                
                {/* <InputGroup className="mb-3">
                    
                    <FormControl
                        style={{ }}
                        className='search'
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <SearchIcon />
                </InputGroup> */}
       
                
            
            

            
            <Videos result={ result} />
            
        </div>
    )
}

export default App
