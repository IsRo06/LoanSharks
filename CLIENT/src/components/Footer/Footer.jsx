import styles from './Footer.module.css'

export default function Footer() {
  return(
    <div id={styles.footer}>
      <div id={styles.headings}>
        <h4>Loan Shark Enterprise</h4>
        <h4>Our Team (Team 71)</h4>
      </div>
      <div id={styles.text}>
        <p> For clients with a low credit score who need to rent a car, Loan Sharks
            Enterprise is a car rental service that allows them to rent a reliable vehicle for
            their transportation needs. Unlike our competition, we take pride in the fact that 
            our service has a simple renting process that does not rely on a client’s credit score. 
            We understand that finances are not everyone’s forte and that everyone should have a 
            chance at decent transportation. We only ask for one thing as collateral, on the chance 
            that any payments are not made: your kneecaps.
        </p>
        <div id={styles.teamInformation}>
          <p>Project Manager: Lennon King- lennon.k@ufl.edu</p>
          <p>Scrum Master: Isabella Roman Ramierez- isabella.roman1@ufl.edu</p>
          <p>Front-end Project Developer: Stephanie Fong- fong.s@ufl.edu</p>
          <p>Back-end Project Developer: Jeevan Munnangi- j.munnangi.ufl@edu</p>
        </div>
      </div>
    </div>
  )
}