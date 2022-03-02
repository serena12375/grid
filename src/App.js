
import './App.css';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Grid from '@material-ui/core/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@material-ui/core/List';





const text = {
  color:  '#4ecbef',
}


function App() {
  return (
    <div className="App">
   <Grid lg={3}>  
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>         
    <ListItem alignItems="flex-start">
       <ListItemText
          style={text} primary="Video 2 3mn30s"     
        />
      </ListItem>

  
  
  
      <Divider style={{background:'#4ecbef', }}variant="middle" />

  <ListItem alignItems="flex-start">     
  
    
    <Button variant="contained"  style={{
                background: '#4ecbef', color:'white', }}>
                     
                     < AddCircleIcon  className="app" /> Add Next Video
                     </Button>  
    </ListItem>
    <ListItem alignItems="flex-start">
        
      
        <ListItemText
          style={text} primary="Hotspot1"
       
        />
      </ListItem>

      <Divider style={{background:'#4ecbef', }}variant="middle" />

     
      <ListItem alignItems="flex-start">
      <Button variant="contained"  style={{
                background: '#4ecbef', color:'white', }}>
                     
                     < EditTwoToneIcon  className="app" /> Edit Hotspot Content
                     </Button>  
      </ListItem>

                      </List> 
                      </Grid>
    </div>  
  );
}

export default App;
