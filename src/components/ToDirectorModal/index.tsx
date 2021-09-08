import React from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react'

interface Props {
  buttonText: string,
  choice: string,
  header?: string,
  feedback?: string,
  enableSelect?: boolean
}

function ToDirectorModal({buttonText, choice, header, feedback, enableSelect}: Props) {
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false)

  return (
    <Modal
      onClose={() => {setOpen(false); setSent(false);}}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button disabled={enableSelect===false} secondary>{buttonText}</Button>}
    >
      <Modal.Content>
        <Modal.Description>
          {
            sent === false && 
            <>
              <p>{header} "{choice}".</p>
              <Form>
                <TextArea placeholder='Besked...' />
              </Form>
            </>
          }
          {
            sent && 
            <>
              <p>"{feedback}"</p>
            </>
          }
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {
          sent === false && 
          <Button
            content="Send email"
            labelPosition='right'
            icon='envelope'
            onClick={() => setSent(true)}
            primary
          />
        }
        {
          sent && 
          <Button
            onClick={() => {setOpen(false); setSent(false);}}
            primary
          >Luk</Button>
        }
      </Modal.Actions>
    </Modal>
  )
}

export default ToDirectorModal
