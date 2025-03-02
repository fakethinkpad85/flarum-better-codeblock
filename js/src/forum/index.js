import app from 'flarum/app';
import { extend, override } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

// Export a function that adds a custom code block button
export default function() {
  // Add our custom code block button and try to remove the original button
  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    // Try to remove the original code button if it exists
    if (items.has('code')) {
      items.remove('code');
    }
    
    // Add our custom code block button
    items.add('codeblock', 
      TextEditorButton.component({
        title: 'Insert Code Block (Triple Backticks)',
        icon: 'fas fa-code',
        onclick: () => {
          // Get the textarea element
          const textarea = this.$('textarea').get(0);
          if (!textarea) return;
          
          // Get the current selection
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const value = textarea.value;
          
          // If there's selected text, wrap it in triple backticks
          if (start !== end) {
            const selectedText = value.substring(start, end);
            const newText = value.substring(0, start) + '```\n' + selectedText + '\n```' + value.substring(end);
            textarea.value = newText;
            // Place cursor after the selected text
            textarea.selectionStart = start + 4 + selectedText.length;
            textarea.selectionEnd = start + 4 + selectedText.length;
          } else {
            // Otherwise, just insert empty triple backticks
            const newText = value.substring(0, start) + '```\n\n```' + value.substring(start);
            textarea.value = newText;
            // Place cursor between the backticks (after the first newline)
            textarea.selectionStart = start + 4;
            textarea.selectionEnd = start + 4;
          }
          
          // Trigger input event to update the preview
          $(textarea).trigger('input');
          
          // Focus the textarea
          textarea.focus();
        }
      }),
      10 // Add it at the beginning of the toolbar
    );
  });
  
  // Try to override the core markdown toolbar configuration
  app.initializers.add('flarum-better-codeblock-core-override', function() {
    if (app.markdown && app.markdown.toolbar) {
      const originalItems = app.markdown.toolbar.items;
      app.markdown.toolbar.items = originalItems.filter(item => item.name !== 'code');
    }
  }, -20);
  
  // Add CSS to hide the original button - this is our most reliable approach
  // and is working even when the button can't be completely removed from the DOM
  $(document).ready(function() {
    $('<style>')
      .text(`
        /* Hide the original code button */
        .MarkdownToolbar button[aria-label="Insert code"] { 
          display: none !important; 
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `)
      .appendTo('head');
  });
}
