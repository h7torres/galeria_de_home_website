import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import { contactFormAction } from '../data/site'

const field = 'w-full border border-black bg-white px-3 py-2 font-label text-sm text-black outline-none focus:border-2'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!contactFormAction) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(contactFormAction, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageTitle>CONTACT</PageTitle>
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="name" placeholder="Name" className={field} />
          <input name="email" type="email" required placeholder="Email*" className={field} />
        </div>
        <input name="phone" type="tel" placeholder="Phone" className={field} />
        <textarea name="comment" rows="6" placeholder="Comment" className={field} />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="self-center bg-black px-8 py-3 font-label text-sm text-white transition-colors hover:bg-button-hover disabled:opacity-50"
        >
          {status === 'sending' ? 'SENDING…' : 'SUBMIT'}
        </button>
        {status === 'sent' && <p className="text-center font-label text-sm">THANKS, WE GOT YOUR MESSAGE.</p>}
        {status === 'error' && (
          <p className="text-center font-label text-sm">
            {contactFormAction ? 'SOMETHING WENT WRONG. TRY AGAIN.' : 'THE FORM ISN’T CONNECTED YET.'}
          </p>
        )}
      </form>
    </>
  )
}