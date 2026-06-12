import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AlarmClock, Brain, CheckCircle2, FileText, Flame, Swords, Target, UploadCloud, Zap } from 'lucide-react';
import { demoSyllabus, formulas } from './data/demoSyllabus.js';

function App() {
  const [units, setUnits] = useState(demoSyllabus);
  const [uploaded, setUploaded] = useState(false);

  const stats = useMemo(() => {
    const topics = units.flatMap((unit) => unit.topics);
    const completed = topics.filter((topic) => topic.done).length;
    const total = topics.length;
    const percentage = Math.round((completed / total) * 100);

    return { completed, total, percentage };
  }, [units]);

  const toggleTopic = (unitIndex, topicIndex) => {
    setUnits((current) =>
      current.map((unit, index) => {
        if (index !== unitIndex) return unit;

        const topics = unit.topics.map((topic, topicPos) =>
          topicPos === topicIndex ? { ...topic, done: !topic.done } : topic
        );
        const progress = Math.round((topics.filter((topic) => topic.done).length / topics.length) * 100);

        return { ...unit, topics, progress };
      })
    );
  };

  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="noise" />
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow"><Flame size={16} /> Built for last-night exam warriors</div>
          <h1>One Nighters Army</h1>
          <p className="hero-line">For students who open the syllabus when the exam opens fire.</p>
          <p className="hero-subline">
            Upload your syllabus, generate a battle plan, track your progress, and enter the exam hall with less panic and more power.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="primary-button">Start survival mode</a>
            <a href="#vault" className="secondary-button">Open formula vault</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="card-header">
            <span>Tonight's Battle Status</span>
            <Swords size={18} />
          </div>
          <div className="mega-stat">{stats.percentage}%</div>
          <p>{stats.completed}/{stats.total} topics locked in</p>
          <div className="progress-track"><span style={{ width: `${stats.percentage}%` }} /></div>
          <div className="mini-grid">
            <div><AlarmClock size={18} /><strong>8h 12m</strong><span>to exam</span></div>
            <div><Target size={18} /><strong>Graph Theory</strong><span>boss fight</span></div>
          </div>
        </motion.div>
      </section>

      <section id="demo" className="section-grid">
        <div className="glass-card upload-card">
          <UploadCloud size={34} />
          <h2>Syllabus Upload Demo</h2>
          <p>Drop your Discrete Math syllabus and watch it become a unit-wise battle plan.</p>
          <button onClick={() => setUploaded(true)} className="primary-button button-reset">
            {uploaded ? 'Battle plan generated' : 'Fake upload syllabus'}
          </button>
          {uploaded && <p className="success-line"><CheckCircle2 size={16} /> Parsed 3 units, 12 topics, 4 formulas</p>}
        </div>

        <div className="glass-card dashboard-card">
          <div className="card-header"><span>Survival Dashboard</span><Zap size={18} /></div>
          <div className="dashboard-row"><span>Completion</span><strong>{stats.percentage}%</strong></div>
          <div className="dashboard-row"><span>Weak zone</span><strong>Graph Theory</strong></div>
          <div className="dashboard-row"><span>Next attack</span><strong>Equivalence Relations</strong></div>
          <div className="dashboard-row"><span>Mood</span><strong>Cooked but cooking</strong></div>
        </div>
      </section>

      <section className="battle-plan">
        <div className="section-heading">
          <FileText size={22} />
          <div>
            <h2>Generated Battle Plan</h2>
            <p>Click topics as you finish them. Panic becomes progress.</p>
          </div>
        </div>

        <div className="unit-grid">
          {units.map((unit, unitIndex) => (
            <motion.article className="glass-card unit-card" key={unit.title} whileHover={{ y: -5 }}>
              <div className="unit-topline">
                <span>{unit.unit}</span>
                <em>{unit.priority}</em>
              </div>
              <h3>{unit.title}</h3>
              <div className="progress-track compact"><span style={{ width: `${unit.progress}%` }} /></div>
              <ul>
                {unit.topics.map((topic, topicIndex) => (
                  <li key={topic.title} className={topic.done ? 'done' : ''} onClick={() => toggleTopic(unitIndex, topicIndex)}>
                    <CheckCircle2 size={18} />
                    <span>{topic.title}</span>
                    <small>{topic.tag}</small>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="vault" className="vault-section glass-card">
        <div className="section-heading">
          <Brain size={22} />
          <div>
            <h2>Formula Vault</h2>
            <p>Quick revision ammo before entering the exam battlefield.</p>
          </div>
        </div>
        <div className="formula-grid">
          {formulas.map((formula) => (
            <div className="formula-card" key={formula.name}>
              <strong>{formula.name}</strong>
              <span>{formula.value}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
