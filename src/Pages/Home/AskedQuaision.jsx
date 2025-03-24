const AskedQuestion = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-bold text-3xl">
          How do I book a car?
        </div>
        <div className="collapse-content text-xl">
          Go to the car listings or search for your desired car using filters
          like location, model, or price. and go to above section of "Browse Our
          Car Collection" . and click on the "available cars"
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-bold text-3xl">
          What documents do I need to rent a car?
        </div>
        <div className="collapse-content text-xl">
          A valid driver's license, often held for a minimum period (e.g., 1-2
          years). International renters may need an International Driving Permit
          (IDP) if their license is not in the local language.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-bold text-3xl">
          Do I need a credit card to rent a car?
        </div>
        <div className="collapse-content text-xl">
          A card in your name for the security deposit and rental payment. Some
          companies may require a credit card specifically.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-bold text-3xl">
          What is included in the rental price?
        </div>
        <div className="collapse-content text-xl">
          The cost of renting the car for the agreed period.Some rentals include
          unlimited mileage, while others have a limit with additional charges
          for exceeding it.Some companies include limited roadside assistance for breakdowns, while others offer it as an optional add-on.
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
