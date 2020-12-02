import cx from 'classnames'
import { Link } from 'react-router-dom'
import s from './FreelanceCard.module.css'

const FreelanceCard = ({ className, freelance }) => {
  return (
    <article className={cx(s.FreelanceCard, className)} data-testid={`FreelanceCard-${freelance.id}`}>
      <header className={s.header}>
        <img
          className={s.picture}
          src={freelance.picture}
          alt={`${freelance.name}, ${freelance.title}`}
        />
        {freelance.available && (
          <p className={cx(s.pill, s.available)}>Disponible</p>
        )}
        <h2 className={s.name}>{freelance.name}</h2>
      </header>
      <div className={s.body}>
        <h3 className={s.title}>{freelance.title}</h3>
        {freelance.skills.length > 0 && (
          <ul className={s.skillList}>
            {freelance.skills.map((skill) => (
              <li key={skill.id} className={cx(s.pill, s.skill)}>{skill.name}</li>)
            )}
          </ul>
        )}
        <Link to={`/profile/${freelance.id}`} title={`Voir le profil de ${freelance.name}`}>Voir le profil</Link>
      </div>
    </article>
  )
}

export default FreelanceCard
