import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi vitae aperiam libero. Dolorem labore ex, minima ab voluptatibus quaerat aut rerum veniam? Distinctio maxime obcaecati, magnam odit sequi ut laborum!</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'white',
           backgroundColor: 'error.main',
           ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
           position: 'fixed',
           right: 50,
           bottom: 50

        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
