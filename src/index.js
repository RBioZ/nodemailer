const nodemailer = require('nodemailer')

const SMTP_CONFIG = require('./config/smtp')

const transport = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass
  },
  tls: {
    rejectUnauthorized: false
  }
})

async function run() {
  const mailSent = await transport.sendMail({
    text: 'Texto do E-mail',
    subject: 'Assunto do E-mail',
    from: 'Jonatha Rihan da Silva <jonatha_rihan@hotmail.com>',
    to: ['developers.eaglebankdigital@gmail.com'],
    html:`
      <html>
        <body>
          <strong>Hello World</strong>
          <p>Test</p>
        </body>
      </html>
    `
  });

  console.log(mailSent)
}

run();