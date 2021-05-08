import ReactFullpage from '@fullpage/react-fullpage'
import Head from 'next/head'
import React from 'react'
import slug from 'slug'
const sectionsColor = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

const pages = [
  {
    title: 'Discrimination is Ubiquitous',
    body: (
      <>
        <div className='flex justify-evenly w-full'>
          <figure>
            <img
              src='https://www.nydailynews.com/resizer/2ld4i253VAFW9mbHB919LeCSj9g=/1200x0/right/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/OVFYYCGOYZHIHBRNDMZVMXK7CQ.jpg'
              height='200'
            />
          </figure>
          <figure>
            <img
              src='https://static01.nyt.com/images/2021/03/21/lens/18georgia-shooting-promo/18georgia-shooting-promo-videoSixteenByNine3000.jpg'
              height='200'
            />
          </figure>
        </div>
      </>
    )
  },
  {
    title: 'Are You Discriminatory?',
    body: (
      <>
        <i>Harvard Implicit Association Test (IAT)</i>
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
          “Doll Test,” done by psychologists Kenneth and Mamie Clark, showed the
          .power of ethnic segregation. However, race segregation in the United
          States is one of the main reasons people take a cultural blind eye to
          other groups, according to famous sociologist Du Bois. His opinion is
          that people should have double consciousness to judge the world
          fairly.
        </p>
        <p>
          Build a connection between the “double consciousness” brought by Du
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
        <figure>
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
        people resolve this conflict by upholding egalitarian norms and
        simultaneously maintaining subtle or automatic forms of prejudice.
        Specifically, people generally will not discriminate in situations in
        which right and wrong is clearly defined; discrimination would be ob‐
        vious to others and to oneself, and aversive racists do not want to
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
          Knowing the formation of stereotypes and discrimination cannot help
          prevent it easily. However, many individuals and societal factors
          continue to reinforce stereotypes and negative evaluative biases,
          which resulted in more discrimination and suppression. The ethnic
          issue and racial problem have been more complicated than before.
        </p>
        <p>
          When someone is in a group, they are less likely to provide help than
          they are alone. This phenomenon is defined as social loafing. Social
          loafing makes the whole discriminating thing even worse.
        </p>
      </>
    )
  }
]

export default function page(props) {
  const onLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction })
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }
  return (
    <div className='App'>
      <Head>
        <title>My styled page</title>
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
