import styles from './Footer.module.css'

export default function Footer() {
  return(
    <div id={styles.footer}>
      <div id={styles.leftSide}>
        <h4>Loan Shark Enterprise</h4>
        <h6>Our Motto:</h6>
        <p> For clients with a low credit score who need to rent a car, Loan Sharks
            Enterprise is a car rental service that allows them to rent a reliable vehicle for
            their transportation needs. Unlike our competition, we take pride in the fact that 
            our service has a simple renting process that does not rely on a client’s credit score. 
            We understand that finances are not everyone’s forte and that everyone should have a 
            chance at decent transportation. We only ask for one thing as collateral, on the chance 
            that any payments are not made: your kneecaps.
        </p>
        <h6>Locations:</h6>
        <p>Gainesville, FL || Miami, FL || Orlando, FL || Tallahassee, FL || Tampa, FL</p>
      </div>
      <div id={styles.rightSide}>
        <h4>Our Team (Team 71)</h4>
        <div id={styles.team}>
          <h6>Project Manager:</h6><p>Lennon King- lennon.k@ufl.edu</p>
          <h6>Scrum Master:</h6><p>Isabella Roman Ramierez- isabella.roman1@ufl.edu</p>
          <h6>Front-end Project Developer:</h6><p>Stephanie Fong- fong.s@ufl.edu</p>
          <h6>Back-end Project Developer:</h6><p>Jeevan Munnangi- j.munnangi.ufl@edu</p>
        </div>
      </div>
    </div>
  )
}