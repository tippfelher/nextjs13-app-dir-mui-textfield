import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="body1">
              {`Add id="123" to the TextField in src/app/page.tsx to get rid of the error: Warning: Prop 'id' did not match. Server: ":R2l9mcq:" Client: ":Ral6pj9:"`}
            </Typography>
            <TextField />
          </Card>
        </Box>
      </Container>
    </main>
  );
}
