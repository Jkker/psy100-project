import ReactFullpage from '@fullpage/react-fullpage'
import Head from 'next/head'
import React from 'react'
import slug from 'slug'

const baseColor = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

const pages = [
  {
    title: 'Discrimination is Everywhere',
    body: (
      <>
        <div className='flex justify-evenly w-full' style={{ height: '300px' }}>
          <img
            className='h-full'
            src='https://i.loli.net/2021/05/08/acBn52lmGLJWHqD.png'
          />
          <img
            className='h-full'
            src='https://static01.nyt.com/images/2021/03/21/lens/18georgia-shooting-promo/18georgia-shooting-promo-videoSixteenByNine3000.jpg'
          />
          <img
            className='h-full'
            src='https://i.loli.net/2021/05/11/SJRILKj5kE8Azty.jpg'
          />
        </div>
      </>
    )
  },
  {
    title: 'But... Everyone Discriminates',
    body: (
      <>
        <h2>Harvard Implicit Association Test (IAT): Gender-Career</h2>
        <img src='https://i.loli.net/2021/05/09/mA5XICxQWHegUEw.png' />
      </>
    )
  },
  {
    title: 'Am I...Discriminatory ?',
    body: (
      <>
        <iframe
          src='https://implicit.harvard.edu/implicit/takeatest.html'
          style={{ height: '70vh', flexGrow: '1', marginTop: '2rem' }}
          width='100%'
        />
      </>
    )
  },
  {
    title: 'What is Discrimination, After All?',
    body: (
      <>
        <p>
          From a sociology perspective, we should admit discrimination, but we
          emphasize contributing efforts to eliminate the actual discriminated
          behaviors. We start by stopping attack action verbal harms. It is
          pretty interesting to think of discrimination formation from the
          cognitive level through psychological knowledge.
        </p>
      </>
    )
  },
  {
    title: 'How Do We Define Discrimination?',
    body: (
      <>
        <p>
          Discrimination refers to unjustifiable negative behavior towards a
          group or its members, where behavior is adjudged to include both
          actions towards, and judgments/decisions about, group members (Bond &
          Russell, 2010).
        </p>
      </>
    )
  },
  {
    title: 'Discrimination Scenario',
    body: (
      <>
        <p>
          ???Doll Test,??? done by psychologists Kenneth and Mamie Clark, showed the
          .power of ethnic segregation. However, race segregation in the United
          States is one of the main reasons people take a cultural blind eye to
          other groups, according to famous sociologist Du Bois. His opinion is
          that people should have double consciousness to judge the world
          fairly.
        </p>
        <p>
          Build a connection between the ???double consciousness??? brought by Du
          Bois and social loafing and group thinking.
        </p>
      </>
    )
  },
  {
    title: 'Group Thinking',
    body: (
      <>
        <p>
          Group thinking means a group tends to reach consensus to facilitate
          harmony within the group. It can be associate with the consciousness
          that Du Bois referred. Group thinking help explains that people have
          obstacles understanding and have trouble facilitating harmony outside
          the groups, which means that race segregation makes people
          misunderstand in a certain way or at least have barriers in reaching
          other groups. When someone is in a group, they are less likely to
          provide help than they are alone. This phenomenon is defined as social
          loafing. Social loafing makes the whole discriminating thing even
          worse.
        </p>
        <figure className='flex items-center flex-col my-8 space-y-4'>
          <img src='https://i.loli.net/2021/05/08/qMGrwm6CxDJkiZy.png' />
          <figcaption>
            This figure shows that behaviors from Intergroup affect and
            stereotypes.
          </figcaption>
        </figure>
      </>
    )
  },
  {
    title: 'Group Stereotypes',
    body: (
      <>
        <p>
          These stereotypes predict the effect towards the outgroup, and
          development indicates action tendencies. Group stereotypes include a
          mixture of competence and warmth attributes, and this combination of
          content gives rise to particular emotions and action tendencies. The
          warmth dimension of stereotypes carries greater weight in social
          encounters (Cuddy et al., 2007; Van Lange and Kuhlman, 1994; Vonk,
          1999; Wojciszke et al., 1998).
        </p>
        <p>
          Negative active and passive behaviors can be construed by targets as
          constituting discrimination and can significantly impact the quality
          of life. (Bond & Russell, 2010)
        </p>
      </>
    )
  },
  {
    title: 'Aversive Racism & Systematic Discrimination',
    body: (
      <p>
        People resolve this conflict by upholding egalitarian norms and
        simultaneously maintaining subtle or automatic forms of prejudice.
        Specifically, people generally will not discriminate in situations in
        which right and wrong is clearly defined; discrimination would be
        obvious to others and to oneself, and aversive racists do not want to
        appear or be discriminatory. However, aversive racists will
        systematically discriminate when appropriate behaviours are not clearly
        prescribed or they can justify their behaviour on the basis of some
        factor other than race (see Dovidio and Gaertner, 2004).
      </p>
    )
  },
  {
    title: 'Conclusion',
    body: (
      <>
        <p>
          The Implicit Association Test shed light on the pervasiveness of
          stereotyping and discrimination in the general population.
          Nonetheless, it also helps identify the possible causes of their
          formation. Familiarity is key: people are often scared of the unknown,
          so they form prejudices.
        </p>
        <p>
          Moreover, when someone is in a group, they are less likely to provide
          help than they are alone. This phenomenon is defined as social
          loafing. Social loafing makes the whole discriminating thing even
          worse.
        </p>
        <p>
          After all, knowing the formation of stereotypes and discrimination
          cannot eradicate them. Many individuals and societal factors continue
          to reinforce stereotypes and negative evaluative biases, which
          resulted in more discrimination and suppression. The ethnic issue and
          racial problem in our world is becoming increasingly complicated than
          ever.
        </p>
      </>
    )
  },
  {
    title: 'References',
    body: (
      <>
        <ol className='list-decimal text-left space-y-6'>
          <li>
            (Bond & Russell, 2010) Bond, L., & Russell, H. (Eds.).
            (2010).??Making equality count: Irish and international approaches to
            measuring equality and discrimination. Dublin, Ireland: Liffey
            Press.
          </li>
          <li>
            Cuddy, A.J.C., Fiske, S.T, and Glick, P. (2007). 'The BIAS map:
            Behaviors from intergroup affect and stereotypes'. Journal of
            Personality and Social Psychology, 92, 631???648
          </li>
          <li>
            Dovidio, J.F., Brigham, J.C., Johnson, B.T. and Gaertner, S.L.
            (1996). 'Stereotyping, prejudice, and discrimination: Another look'.
            In N. Macrae, C. Stangor and M. Hewstone (eds.), Stereotypes and
            Stereotyping (pp. 276??? 319). New York: Guilford
          </li>
        </ol>
      </>
    )
  },
  {
    title: 'Acknowledgements',
    body: (
      <>
        <ol className='list-decimal text-left space-y-6'>
          <li>
            Visuals built with{' '}
            <a href='https://alvarotrigo.com/fullPage/'>fullpage.js</a>
          </li>
          <li>
            Website deployed on <a href='https://vercel.com/'>Vercel</a>
          </li>
          <li>
            Domain registered for free on{' '}
            <a href='https://www.freenom.com/'>Freenom</a>
          </li>
        </ol>
      </>
    )
  }
]

const sectionsColor = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

for (let i = 4; i < pages.length; i++) {
  sectionsColor.push(baseColor[~~(Math.random() * baseColor.length)])
}

export default function page(props) {
  const onLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction })
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }
  return (
    <div className='App'>
      <Head>
        <title>PSY 100 Project on Discrimination</title>
        {/* <link href="/static/styles.css" rel="stylesheet" /> */}
      </Head>
      <ReactFullpage
        navigation
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        render={(comp) =>
          console.log('render prop change') || (
            <ReactFullpage.Wrapper>
              {pages.map(({ title, body }) => (
                <div className='section' key={title} data-anchor={slug(title)}>
                  <div className='container mx-auto px-12 lg:px-24 xl:px-64'>
                    <h1 className='text-4xl font-bold my-8'>{title}</h1>
                    {body}
                  </div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  )
}
