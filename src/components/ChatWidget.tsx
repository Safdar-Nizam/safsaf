import React, { useState } from 'react';
import retrieve from '@/lib/retriever';

export function ChatWidget() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ from: 'user' | 'bot'; text: string }>>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const q = query.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: 'user', text: q }]);
    setQuery('');
    setLoading(true);

    // client-side retrieval
    const docs = retrieve(q, 3);

    if (docs.length === 0) {
      setMessages((m) => [...m, { from: 'bot', text: "I couldn't find a direct match in the site content. Try rephrasing or ask about something specific." }]);
      setLoading(false);
      return;
    }

    const replyParts = docs.map((d) => `From ${d.title}: ${d.content}`);
    const reply = replyParts.join('\n\n---\n\n');

    setMessages((m) => [...m, { from: 'bot', text: reply }]);
    setLoading(false);
  }

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="bg-card border border-primary/10 rounded-lg p-4 warm-shadow">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-display font-semibold text-foreground">Site Assistant</h4>
          <span className="text-sm text-muted-foreground">Ask about this site</span>
        </div>

        <div className="h-52 overflow-auto p-2 bg-transparent rounded-md border border-transparent mb-3">
          {messages.length === 0 && (
            <div className="text-muted-foreground">Try asking: "What projects did you build?" or "Tell me about Help Us Grow"</div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`mb-3 ${m.from === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block ${m.from === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card'} px-3 py-2 rounded-lg`}>
                <div className={`text-sm ${m.from === 'user' ? 'font-medium' : 'text-muted-foreground'}`}>{m.text}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask something about the site..."
            className="flex-1 bg-muted/20 border border-border/40 px-4 py-2 rounded-md focus:outline-none"
          />
          <button type="submit" disabled={loading} className="bg-primary px-4 py-2 rounded-md text-primary-foreground font-medium">
            {loading ? '...' : 'Ask'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatWidget;
