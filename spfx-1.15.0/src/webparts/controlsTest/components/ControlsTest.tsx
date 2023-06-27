import * as React from 'react';
import styles from './ControlsTest.module.scss';
import { IControlsTestProps } from './IControlsTestProps';
import { DynamicForm } from "@pnp/spfx-controls-react/lib/DynamicForm";

export default class ControlsTest extends React.Component<IControlsTestProps, {}> {
  public render(): React.ReactElement<IControlsTestProps> {
    const {
      _context
    } = this.props;

    return (
      <section className={`${styles.controlsTest}`}>
        <div className={styles.welcome}>
          <DynamicForm 
            context={_context} 
            //listId={"3f0569bd-4f3f-4570-8596-08f4f6963e6a"}
            listId={"aa553012-2109-4431-ad7f-a57a32800dc2"}   //Specify your list id
            //listItemId={1} //To create a listitem, you dont need to specify and list item id, if you want to update a list item you can you listitemid
            onCancelled={() => { console.log('Cancelled') }}
            onBeforeSubmit={async (listItem: any) => { return false; }}
            onSubmitError={(listItem: any, error: { message: any; }) => { alert(error.message); }}
            onSubmitted={async (listItemData: any) => { console.log(listItemData); }}
            //webAbsoluteUrl={""} //To get the context of another site
            >
          </DynamicForm>
        </div>
      </section>
    );
  }
}
