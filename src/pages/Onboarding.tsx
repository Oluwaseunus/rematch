export default function Onboarding() {
  return (
    <div className='onboarding'>
      <div className='onboarding__hero'>
        <div className='onboarding__hero-text'>
          <p className='onboarding__hero-tagline'>Let's get you started</p>
          <h1 className='onboarding__hero-title'>
            Select at least one game to get started with
          </h1>
        </div>
      </div>
      <div className='onboarding__games'>
        <div className='onboarding__filters'>
          <div className='onboarding__filters-input'>
            <input type='text' placeholder='Search game titles' name='title' />
          </div>
          <div className='onboarding__filters-dropdown'>
            <p className='onboarding__filters-dropdown-label'>Showing: </p>
            <div className='select'>
              <select name='showing' id='showing'>
                <option value='all' selected>
                  All games
                </option>
              </select>
              {/* <img src="../assets/svgs/dropdown.svg" alt="Dropdown" /> */}
            </div>
          </div>
        </div>
        <div className='onboarding__games-list'></div>
        <div className='cta'>
          <button className='primary'>Continue</button>
        </div>
      </div>
    </div>
  );
}
