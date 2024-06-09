
import { EmailTemplate } from './../../../components/email-template/email-template';
import { useUser } from '@clerk/nextjs';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const {user} = useUser();
export async function POST () {

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['yeheashorafa6@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: user.firstName }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({error});
    
  }
 
};