import app from 'flarum/forum/app';
import { extend as extendFn } from 'flarum/common/extend';
import TextEditor from 'flarum/forum/components/TextEditor';

// Export the extend property that Flarum looks for
export const extend = [];

// Initialize the extension
app.initializers.add('fakethinkpad85-better-codeblock', () => {
  extendFn(TextEditor.prototype, 'toolbarItems', function(items) {
    // Add a new button for code blocks (triple backticks)
    items.add('codeblock', {
      title: 'Code Block (Triple Backticks)',
      icon: 'fas fa-code-branch',
      onclick: () => {
        // Get the composer instance
        const composer = this.attrs.composer;
        
        // Get the editor instance
        const editor = composer.editor;
        
        // Get the current selection
        const selectionRange = editor.getSelectionRange();
        
        // Get the current content
        const content = editor.value();
        
        // Insert the code block
        const newContent = content.substring(0, selectionRange[0]) + 
                        '```\n' + content.substring(selectionRange[0], selectionRange[1]) + '\n```' + 
                        content.substring(selectionRange[1]);
        
        // Set the new content
        editor.setValue(newContent);
        
        // Move the cursor inside the code block
        editor.moveCursorTo(selectionRange[0] + 4);
        
        // Update the preview
        this.attrs.preview();
      }
    });
  });
});
