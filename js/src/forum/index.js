import app from 'flarum/app';
import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

// Export a function that adds the code block button
export default function addCodeBlockButton() {
  // Log a message to verify that the file has been updated
  // console.log('Better Code Block extension loaded - ' + new Date().toISOString());

  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    items.add('codeblock', (
      <TextEditorButton 
        onclick={() => {
          // Get the editor instance
          const editor = this.attrs.composer.editor;
          
          // Get the current selection
          const selectionRange = editor.getSelectionRange();
          
          // If there's selected text, wrap it in code blocks
          if (selectionRange[0] !== selectionRange[1]) {
            const selectedText = editor.value().substring(selectionRange[0], selectionRange[1]);
            editor.replaceRange(selectionRange[0], selectionRange[1], '```\n' + selectedText + '\n```');
            editor.moveCursorTo(selectionRange[0] + 4); // Move cursor after the opening ```
          } else {
            // Otherwise, just insert empty code blocks
            editor.insertAt(selectionRange[0], '```\n\n```');
            editor.moveCursorTo(selectionRange[0] + 4); // Move cursor after the opening ```
          }
          
          // Update the preview
          this.attrs.preview();
        }} 
        icon="fas fa-code"
      >
        Insert Code Block (Triple Backticks)
      </TextEditorButton>
    ));
  });
}
