import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function buildEmailHtml(name: string, email: string, message: string): string {
  const escaped = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Transmission</title>
</head>
<body style="margin:0;padding:0;background-color:#0b0f10;font-family:'Space Grotesk',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0b0f10;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border:1px solid #3c4a42;">

          <!-- Terminal header bar -->
          <tr>
            <td style="background-color:#323537;padding:10px 16px;border-bottom:1px solid #3c4a42;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:8px;"><div style="width:12px;height:12px;background-color:#363a3b;display:inline-block;"></div></td>
                  <td style="padding-right:8px;"><div style="width:12px;height:12px;background-color:#363a3b;display:inline-block;"></div></td>
                  <td style="padding-right:16px;"><div style="width:12px;height:12px;background-color:#4edea3;display:inline-block;"></div></td>
                  <td style="color:#bbcabf;font-size:11px;letter-spacing:0.05em;">root@dev_architect: ~/logs/transmission_received.log</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#101415;padding:40px 32px;">

              <!-- Status row -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding-right:16px;vertical-align:top;">
                    <div style="width:56px;height:56px;border:2px solid #4edea3;display:flex;align-items:center;justify-content:center;text-align:center;line-height:56px;">
                      <span style="color:#4edea3;font-size:28px;font-weight:700;">✓</span>
                    </div>
                  </td>
                  <td style="vertical-align:middle;">
                    <p style="margin:0 0 4px;color:#4edea3;font-size:13px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">NEW TRANSMISSION RECEIVED</p>
                    <p style="margin:0;color:#bbcabf;font-size:12px;">Someone reached out via your portfolio contact form.</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background-color:#3c4a42;margin-bottom:32px;"></div>

              <!-- Field: NAME -->
              <p style="margin:0 0 4px;color:#4edea3;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">&gt; NAME</p>
              <p style="margin:0 0 24px;color:#e0e3e5;font-size:15px;padding-left:12px;border-left:2px solid #3c4a42;">${escaped(name)}</p>

              <!-- Field: EMAIL -->
              <p style="margin:0 0 4px;color:#4edea3;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">&gt; EMAIL</p>
              <p style="margin:0 0 24px;color:#e0e3e5;font-size:15px;padding-left:12px;border-left:2px solid #3c4a42;">${escaped(email)}</p>

              <!-- Field: MESSAGE -->
              <p style="margin:0 0 4px;color:#4edea3;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">&gt; MESSAGE</p>
              <div style="margin:0 0 32px;color:#e0e3e5;font-size:15px;line-height:1.7;padding:16px;background-color:#1d2022;border-left:2px solid #4edea3;">${escaped(message)}</div>

              <!-- Divider -->
              <div style="height:1px;background-color:#3c4a42;margin-bottom:24px;"></div>

              <!-- Terminal log lines -->
              <p style="margin:0 0 4px;color:#bbcabf;font-size:11px;">&gt; Sender validated... <span style="color:#4edea3;">[OK]</span></p>
              <p style="margin:0 0 4px;color:#bbcabf;font-size:11px;">&gt; Message encrypted... <span style="color:#4edea3;">[OK]</span></p>
              <p style="margin:0 0 4px;color:#bbcabf;font-size:11px;">&gt; Transmission logged... <span style="color:#4edea3;">[OK]</span></p>
              <p style="margin:0;color:#4edea3;font-size:11px;">&gt; Reply to: ${escaped(email)}</p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0b0f10;padding:16px 32px;border-top:1px solid #3c4a42;text-align:center;">
              <p style="margin:0;color:#bbcabf;font-size:11px;letter-spacing:0.05em;">DEV_ARCHITECT · Portfolio Contact System</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <noreply@contact.jpierredev.cloud>",
    to: "jeanpierrehuapaya@gmail.com",
    replyTo: email,
    subject: `[Portfolio] New message from ${name}`,
    html: buildEmailHtml(name, email, message),
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
