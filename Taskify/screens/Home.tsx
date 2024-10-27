import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Checkbox, FormControlLabel, BottomNavigation, BottomNavigationAction, Fab } from '@mui/material';
import { Home, CalendarToday, List, Person, Add } from '@mui/icons-material';

const TaskManagerApp: () => React.JSX.Element = () => {
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" gutterBottom>
          Hello, John Doe
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your Task, Today
        </Typography>
        <TaskCard />
      </Container>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Calendar" icon={<CalendarToday />} />
        <BottomNavigationAction label="Tasks" icon={<List />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
      <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <Add />
      </Fab>
    </div>
  );
};

const TaskCard: React.FC = () => {
  return (
    <Card variant="outlined" style={{ marginTop: 16 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          In Progress (1 Task)
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <div>
              <Typography variant="body1">Do Math Homework</Typography>
              <Typography variant="caption">Today At 16:45</Typography>
            </div>
          }
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="body2" style={{ backgroundColor: '#009688', color: 'white', padding: '4px 8px', borderRadius: 4 }}>
            High
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskManagerApp;