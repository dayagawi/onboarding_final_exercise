import Avatar from './components/Avatar'

function App() {

  return (
    <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
      <Avatar 
        content={{ type: "icon" }}
        size="sm"
      />
      <Avatar 
        content={{ type: "icon" }}
        size="md"
      />
      <Avatar 
        content={{ type: "icon" }}
        size="lg"
      />
      <Avatar 
        content={{ type: "icon" }}
        size="xl"
      />

      <Avatar 
        content={{ type: "initials", initials: "AJ" }}
        size="sm"
      />
      <Avatar 
        content={{ type: "initials", initials: "AJ" }}
        size="md"
      />
      <Avatar 
        content={{ type: "initials", initials: "AJ" }}
        size="lg"
      />
      <Avatar 
        content={{ type: "initials", initials: "AJ" }}
        size="xl"
      />
    </div>
  )
}

export default App
