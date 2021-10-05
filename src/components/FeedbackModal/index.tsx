import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';
import { Feedback } from '../../interfaces/Feedback';

import './index.less';

export interface FeedbackModalProps {
  title: string;
  description: string;
  cancelBtnText: string;
  submitBtnText: string;
  approvedBtnText: string;
  approvedDescription: string;
  feedbackOptions?: Array<Feedback>;
  open: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  size: "small" | "mini" | "tiny" | "large" | "fullscreen" | undefined;
}

const FeedbackModal = ({title, description, cancelBtnText, submitBtnText, feedbackOptions, open, onSubmit, onCancel, size, approvedBtnText, approvedDescription}: FeedbackModalProps) => {

  const [feedback, setFeedback] = React.useState<Array<Feedback>>([]);
  const { pChainChoices } = usePChainChoices();
  const [isApproved, setIsApproved] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      // gather all ids of selected pChains
      const pChainChoiceIds = pChainChoices.map(p => p.id);
      const arr: Array<Feedback> = [];
      feedbackOptions?.forEach( f => {
        if (pChainChoiceIds.indexOf(f.id1) > -1 && pChainChoiceIds.indexOf(f.id2) > -1) {
          arr.push(f);
        }
      });
      setFeedback(arr);
    }
  }, [feedbackOptions, pChainChoices, open]);

  return (
    <Modal
      className="feedback-modal"
      size={size}
      open={open}
      onClose={onCancel}
      >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Header className="feedback-modal__description" size="medium"> {isApproved ? approvedDescription : description}</Header>
          {
            !isApproved &&
            feedback.map( (f, index) => 
              <div key={f.id1 + '_' + f.id2} className="feedback-modal__feedback">
                <Header size="medium">{index + 1}. {f.title}</Header>
                <p>{f.description}</p>
              </div>
            )
        }
      </Modal.Content>
      <Modal.Actions>
        {
          !isApproved &&
          <>
            <Button secondary onClick={() => onCancel()}>
              {cancelBtnText}
            </Button>
            <Button positive onClick={() => setIsApproved(true) }>
              {submitBtnText}
            </Button>
          </>
        }
        {
          isApproved &&
          <Button positive onClick={() =>  {
            setIsApproved(false);
            onSubmit();
          }}>
            {approvedBtnText}
          </Button>
        }
      </Modal.Actions>
    </Modal>
  )
}

FeedbackModal.defaultProps = {
  title: 'Feedback modal title',
  despription: 'Feedback modal description',
  cancelBtnText: 'Cancel',
  submitBtnText: 'Submit',
  feedback: [],
  isOpen: false,
  onSubmit: () => {},
  onCancel: () => {},
  size: 'small'
}

export default FeedbackModal;

