import React from 'react';
import { Carousel } from '@mantine/carousel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Modal, Paper, TextInput, MultiSelect, Badge, Textarea, Image, Text, Button, Group } from '@mantine/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from '/Users/apple/item_management-web/src/components/layouts/header';
// import {Header} from '@components/layouts/header';
import { useState } from 'react';
// import { Detailmodai } from '@components/modal/detailModal.tsx';

// function App() {
//   return (
//     <div>
//       <Header />

//     </div>
//   );
//   }

function APP(){
  const[inputValue, setInputValue] = useState("");
  const[todos, setTodos] = useState<Todo[]>([]); 
  type Todo ={
    inputValue: string;
    id: number;
    checked: boolean;
  }
}
// const handleChange = (e: { target: { value: any; }; }) => {
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const user_info = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ジャンル
      </Typography> */}
      <Typography variant="h5" component="div">ユーザネーム
        <EditModal></EditModal>
        総所持数○個
        <Button>ジャンル管理</Button>
        <ItemResultModal></ItemResultModal>
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <CardActions>
      </CardActions>
    </CardContent>
  </React.Fragment>
);
const card = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ジャンル
      </Typography> */}

      <Typography variant="h5" component="div">
        ジャンル●個
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <Typography  >
        持ち物
        <button>詳細</button>
        <CardActions>
        </CardActions>
      </Typography>
      <Typography>
        持ち物
        <button>詳細</button>
        <CardActions>
        </CardActions>
      </Typography>
      <Typography>
        持ち物
        <button>詳細</button>
        <CardActions>
        </CardActions>
      </Typography>
    </CardContent>
  </React.Fragment>
);

// const tmp = ref
// const tmp = reactive

//ユーザ編集画面
function EditModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="EDIT"
      >
        <Paper shadow="md" m="md" p="sm">
          <TextInput mt="sm"
            label="nickname" withAsterisk
            placeholder="nicknameを入力してください"
          />
          <TextInput mt="sm"
            label="E-mail" withAsterisk
            placeholder="E-mailを入力してください"
          />
          <TextInput mt="sm"
            label="Password" withAsterisk
            placeholder="Passwordを入力してください"
          />
        </Paper>
        <Group position="right">
          <Button mt="sm" >送信</Button>
        </Group>
        {/* Modal content */}
      </Modal>

      <Button onClick={() => setOpened(true)}>EDIT</Button>
    </>
  );
}

//持ち物登録
function ItemResultModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="持ち物登録"
      >
        <Paper shadow="md" m="md" p="sm">
          <TextInput mt="sm"
            label="ジャンル名" withAsterisk
            placeholder="ジャンル名を入力してください"
          />
          <TextInput mt="sm"
            label="持ち物名" withAsterisk
            placeholder="持ち物名を入力してください"
          />
        </Paper>
        <Group position="right">
          <Button mt="sm" >登録</Button>
        </Group>
        {/* Modal content */}
      </Modal>

      {/* <Button onClick={() => setOpened(true)}>持ち物登録</Button> */}
      <Button onClick={() => setOpened(true)} onChange={(e) => handleChange}>持ち物登録</Button>
    </>
  );
}


export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth: 2000 }}>
      <Card variant="outlined">{user_info}
        {/* <Card variant="outlined">{card}</Card> */}
        {/* <Card variant="outlined">{card}</Card> */}
      </Card>
      <Carousel
        withIndicators
        height={800}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        <Carousel.Slide>{card}</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </Box>


  );
}



