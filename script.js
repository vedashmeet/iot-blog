let postTitle = [
  'Orientation Session',
	'Python Basics',
	'Foundation of Electonics',
	'Embedded Computing',
	'Cloud Basics',
	'Android Development',
	'BLE',
	'Basics of Machine Learning',
	'Machine Learning on Mi...',
	'IOT Security Practices'
];

let instructorName = {
  bdg: 'Mr. Bhaskar Dev Goel Sir',
  sk: 'Ms. Sarbjit Kaur Mam',
  rm: 'Mr. Ravi Mittal Sir',
  rs: 'Mr. Ramandeep Singh Sir',
  sv: 'Mr. Sonu Verma Sir',
  sr: 'Mr. Saurabh Ritu Sir'
};

let content = {
  post0 : `
    <p>
      Dr. Sarabjot Singh Anand, co-founder and head of Academics, Sabudh Foundation & co-founder, Tatras Data, welcomes us in Sabudh Foundation. 
      He tells us about some of the projects that students in the IOT program working on along with their projects mentors. Next, all the mentors introduced themselves to us. 
      Ms. Sarbjit Kaur working as Junior Data Scientist in Sabudh from last one year. Mr. Ravi Mittal also working as Junior Data Scientist in Sabudh. 
      Mr. Bhaskar Dev Goel working as Junior Data Scientist at Tatras Data Services. All the mentors are motivating us with the internship. Next, Ms. Sarbjit Kaur explain 
      us the briefs of courses, projects, assessments and other details of the internship. Next, Ms. Eknoor Kaur explain us how we can access the IOT courses from 
      EduCollab web portal.
    </p>`,
  post1 : `
    <p class="display-6">
      What is Python?
    </p>
    <p>
      Python is an interpreted, high level, weekly-typed, interactive and object oriented programming language. Python code is very short as compared to other 
      programming language. It is highly readable, just like english. Now-a-days, python is most popular language in the world. Reason for that is, it is easy to 
      learn, easy to write, easy to maintain, easy to debug and it has broad standard library which reduces large set of code to few lines.
    </p>
    <p class="display-6">
      What is a Variable?
    </p>
    <p>
      Variable is a container which stores some types of data. Whenever we want to use a variable , we just initialise it to some data. The size of data stores in a 
      variable directly depends upon the system memory space, on which python code has to run. 
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      a = 5
    </p>
    <p>
      In the above code, variable <em>a</em> is initialised with an integer value. Hence, data type of variable will be Int. We can check type of data with the 
      <em>type(a)</em>. This will give the class of type of data assigned to variable <em>a</em>.
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      print(type(a))
    </P>
    <p class="fw-bold fs-6">
      Output:
    </p>
    <p class="fst-italic ps-5">
      &ltclass 'int'&gt
    </p>
    <p>
      Python has a set of data types:
    </p>
    <ol class="fst-italic" type="1">
      <li>
        Numeric Data types
        <ol type="i">
          <li>Int (i.e., 658215465)</li>
          <li>Float (i.e., 2345.2315685)</li>
          <li>Complex (i.e., 6 + 3j)</li>
        </ol>
      </li>
      <li>
        Sequence Data types
        <ol type="i">
          <li>String (i.e., "Hello World!")</li>
          <li>List (i.e., [1, 2, "Python", [10.526, True]])</li>
          <li>Tuple (i.e., (1, 2, "Python", (10.526, True)))</li>
          <li>Array (i.e., [1, 2, 3, 4, 5, 6])</li>
          <li>Linked List (i.e., Start => 26 => 35 => 65 => 45 => End)</li>
        </ol>
      </li>
      <li>Boolean (i.e., True or False)</li>
      <li>Set (i.e., {1, 2, 3, 4, 5}))</li>
      <li>Dictionary (i.e., {greet: "Hello", name: "Ram"})</li>
    </ol>
    <p class="display-6">
      What is String?
    </p>
    <p>
      A string is an immutable, dynamic and ordered sequence of characters.
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      a = 'SABUDH'
    </p>
    <p>
      <em>type(a)</em> will return <em>&ltclass 'str'&gt</em>. We can get different characters separately from the sequential data. For that purpose, we can use indexing.
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      a[2] #returns B<br>
      a[-1] #returns H<br>
      a[0:3] #returns SAB<br>
      a[-1] #returns H<br>
      a[0:3:2] #returns SB<br>
      a[0:3:] #returns SAB<br>
      a[::2] #returns SBD<br>
      a[::-1] #returns HDUBAS<br>
      len(a) #returns length of the string a, i.e., 6
    </p>
    <p class="display-6">
      What is List?
    </p>
    <p>
      A list is a mutable, dynamic and ordered sequence of non-homogeneous elements.  
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      list = [1, 'abc', [10, 20]]<br>
      print(list[2][1])
    </p>
    <p class="fw-bold fs-6">
      Output:
    </p>
    <p class="fst-italic ps-5">
      20
    </p>
    <p class="display-6">
      What is Tuple?
    </p>
    <p>
      A tuple is an immutable, non-dynamic and ordered sequence of non-homogeneous elements.  
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      tuple1 = (1, 'abc', [10, 20])<br>
      tuple2 = (10, 20)<br>
      tuple3 = tuple1 + tuple2<br>
      print(tuple1, tuple2, tuple3)                            
    </div>
    <p class="fw-bold fs-6">
      Output:
    </p>
    <p class="fst-italic ps-5">
      (1, 'abc', [10, 20]) (10, 20) (1, 'abc', [10, 20], 10, 20)
    </p>`,
  post2: `
    <p class="display-6">
      What is Electronics?
    </p>
    <p>
      Electronics is the branch of science that deals with the study of flow and control of electrons and the study of their behavior and effects in different 
      devices using such electrons such as in vacuums, gases semiconductors, etc.
    </p>
    <p class="display-6">
      Electricals v/s Electronics?
    </p>
    <ul>
      <li>Electrical devices cannot make decisions, whereas electronic devices can.</li>
      <li>Electrical energy does convert into other forms but electronic energy does not.</li>
      <li>Electrical devices produce the voltage and current but electronic devices can control them.</li>
      <li>Electrical devices require large space but electronic devices does not.</li>
      <li>Electrical devices works on AC but electronic devices works on DC</li>
      <li>
        Electrical devices consume more power as it requires high voltage (P = V x I). But electronic devices consume less power as it requires low voltage to operate.
      </li>
    </ul>
    <p class="display-6">
      What is Electronic Component?
    </p>
    <p>
      An electronic component is any basis discrete device in an electronic system used to affect electrons or their associated fields.
    </p>
    <p class="display-6">
      Classification of Electronic Components
    </p>
    <p>
      Electronic Component can be defined into various types based on various parameter such as design architecture (basic components such as diodes, resistors, 
      capacitors, etc.), power supply components and measurement devices (such as Ohmmeter, Ammeter, etc). 
    </p>
    <p>
      Basically electronic components is divided into two categories:
    </p>
      <ol class="fst-italic">
      <li>Active Components</li>
      <li>Passive Components</li>
    </ol>
    <p class="display-6">
      What are Passive Components?
    </p>
    <p>
      Passive components do not required power to do work. They do not process or amplifies the electrical signal. They can only attenuate it. Passive components 
      flow current in both direction. That's why it's also called bilateral devices. They are generally non - polarised in nature. For example - resistors, capacitors, 
      inductors, etc. We called them attenuator because they restrict or just passed away the energy.
    </p>
    <p class="display-6">
      What is Resistor?
    </p>
    <p>
      Resistors provide hindrance in the path of current. They are generally used as current limiter for protecting active components from breakdown. It also 
      provide desired amount of voltage in the circuit. For example - If we want to give 5 V DC to circuit but we have 12 V DC battery then we can use the resistor 
      to resist the voltage from 12V to 5V. Resistor can also acts as a load. It is represented by 'R' and measured in ohms(&#8486;).
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/resistor-symbol.png" alt="Resistor and its Symbol">
      <p class="fs-6">Resistor and its Symbol (USA standard)</p>
    </div>
    <p class="display-6">
      Types of Resistors
    </p>
    <ol type="1">
      <li>
        Fixed Resistor are those in which the resistor value doesn't change according to temperature or applied voltage. They are used to more stability and less noise.
      </li>
      <li>
        Variable Resistor has variable resistance which is varied from 0 to some specified value. They are 3 terminal resistors. They are used to control the 
        volume and brightness.<br>
        Potentiometer is the common example of variable resistor. It is also known as a Pot or Potmeter. It is a 3 terminal resistor in which the resistance is 
        manually varied to control the flow of current. It acts as an adjustable voltage divider.
      </li>
    </ol>
    <p class="display-6">
      Resistance Color Code Calculation
    </p>
    <p>
      We can calculate the ohm value of any fixed resistor by looking at color bands on the resistors. Below the Resistor Band Color Code Table is given:
    </p>
    <table class="text-center align-middle">
      <tr>
        <th>Color</th>
        <th>Band 1</th>
        <th>Band 2</th>
        <th>Band 3</th>
        <th>Band 4 (Multiplier)</th>
        <th>Band 5 (Tolerance +/-)</th>
        <th>Band 6 (Temp. Coef.)</th>
      </tr>
      <tr>
        <td style="background-color: #000000; color: #FFFFFF;">Black</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>10<sup>0</sup></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #964B00; color: #FFFFFF;">Brown</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>10<sup>1</sup></td>
        <td>1%</td>
        <td>100 ppm/K</td>
      </tr>
      <tr>
        <td style="background-color: #FF0000; color: #FFFFFF;">Red</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>10<sup>2</sup></td>
        <td>2%</td>
        <td>50 ppm/K</td>
      </tr>
      <tr>
        <td style="background-color: #FFA500; color: #000000;">Orange</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>10<sup>3</sup></td>
        <td>-</td>
        <td>15 ppm/K</td>
      </tr>
      <tr>
        <td style="background-color: #FFFF00; color: #000000;">Yellow</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>10<sup>4</sup></td>
        <td>-</td>
        <td>25 ppm/K</td>
      </tr>
      <tr>
        <td style="background-color: #00FF00; color: #000000;">Green</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>10<sup>5</sup></td>
        <td>0.50%</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #0000FF; color: #FFFFFF;">Blue</td>
        <td>6</td>
        <td>6</td>
        <td>6</td>
        <td>10<sup>6</sup></td>
        <td>0.25%</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #8F00FF; color: #FFFFFF;">Violet</td>
        <td>7</td>
        <td>7</td>
        <td>7</td>
        <td>10<sup>7</sup></td>
        <td>0.01%</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #808080; color: #000000;">Grey</td>
        <td>8</td>
        <td>8</td>
        <td>8</td>
        <td>10<sup>8</sup></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #FFFFFF; color: #000000;">White</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>10<sup>9</sup></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #FFD700; color: #000000;">Gold</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>10<sup>-1</sup></td>
        <td>5%</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="background-color: #C0C0C0; color: #000000;">Silver</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>10<sup>-2</sup></td>
        <td>10%</td>
        <td>-</td>
      </tr>
    </table>
    <p>
      Band 3<sup>*</sup> column is only used for 5 and 6 Band Resistor. There are many different mnemonic phrases which can be used:
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/resistor-band.png" alt="Resistor with Bands">
      <p class="fs-6">Example of Ohm calculation of Resistor through Color Band on it</p>
    </div>
    <p>
      Let's calculate the color code of above shown resistor. Above resistor is 5 band resistor. So, we will consider the <em>Band 3<sup>*</sup></em> column of 
      the above table. We always match the color band with above table from left to right. And the side which have two bands with larger gap than other band's gap 
      will always be consider as right side.
    </p>
    <p class="fst-italic ps-5">
      Band 1 (Orange) = 3<br>
      Band 2 (Green) = 5<br>
      Band 3 (Black) = 0<br>
      Band 4 (Yellow) = 10<sup>4</sup><br>
      Band 5 (Gold) = 5%
      Resistor value in ohm = (3 5 0) x 10<sup>4</sup> = 3.5M&#8486 &#177 175K&#8486 (As we know, Tolerance = Resistor's Value x Tolerance Band's Value)
    </p>
    <p class="display-6">
      What is Ohm's Law?
    </p>
    <p>
      Ohm's Law states that the current (I) flow through a conductor is directly proportional to the potential difference voltage (V) and inversely proportional 
      to resistance (R).
    </p>
    <p class="fst-italic ps-5">
      I = <sup>V</sup> / <sub>R</sub>
    </p>
    <p class="display-6">
      Resistors in Series
    </p>
    <p>
      The current is same through each resistor in series. The equivalent resistance of the circuit is found by simply adding up the resistance values of the 
      individual resistors.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/resistors-in-series.png" alt="Resistors in Series">
      <p class="fs-6">Resistors in Series</p>
    </div>
    <p class="fst-italic ps-5">
      V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub> (Source Voltage = Sum of Voltage drop across each resistors)<br>
      IReq = IR<sub>1</sub> + IR<sub>2</sub> + IR<sub>3</sub> (I, current is same across each resistor)<br>
      Req = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>
    </p>
    <p class="display-6">
      Resistors in Parallel
    </p>
    <p>
      The voltage across each resistor in parallel is same. The reciprocal of equivalent resistance of the circuit is found by simply adding up the reciprocals 
      of resistance values of the individual resistors.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/resistors-in-parallel.png" alt="Resistors in Parallel">
      <p class="fs-6">Resistors in Parallel</p>
    </div>
    <p class="fst-italic ps-5">
      I = I<sub>2</sub> + I<sub>3</sub> + I<sub>4</sub> (Circuit's Current = Sum of Current drop across each resistors)<br>
      <sup>V</sup> / <sub>Req</sub> 
      = <sup>V</sup> / <sub>R<sub>1</sub></sub> + <sup>V</sup> / <sub>R<sub>2</sub></sub> + <sup>V</sup> / <sub>R<sub>3</sub></sub> 
      (V, voltage is same across each resistor)<br>
      <sup>1</sup> / <sub>Req</sub> 
      = <sup>1</sup> / <sub>R<sub>1</sub></sub> + <sup>1</sup> / <sub>R<sub>2</sub></sub> + <sup>1</sup> / <sub>R<sub>3</sub></sub>
    </p>
    <p class="display-6">
      Current Limited Resistor
    </p>
    <p>
      Let's suppose voltage source (V) is 12V. Voltage across LED (V<sub>LED</sub>) = 3V. Current passing through LED (I) is 20mA. Then how much ohm value of 
      resistor is used to glow LED?
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/current-limited-resistor.png" alt="Current Limited Resistor">
      <p class="fs-6">Example to show the functioning of Current Limited Resistor</p>
    </div>
    <p class="fst-italic ps-5">
      V = 12V<br>
      V<sub>LED</sub> = 3V<br>
      I = <sup>20</sup> / <sub>1000</sub> = 0.02A<br>
      R = <sup>V</sup> / <sub>I</sub> (By Ohm's Law)<br>
      R = <sup>(V - V<sub>LED</sub>)</sup> / <sub>I</sub><br>
      R = <sup>(12 - 3)</sup> / <sub>0.02</sub><br>
      R = 450&#8486
    </p>
    <p class="display-6">
      Voltage Divider Rule
    </p>
    <p>
      Kirchhoff's Voltage Law states that "The algebric sum of all voltages in a loop must equal to zero". A practical application of this law is a voltage divider 
      rule. A series circuit act as voltage divider as voltage divides in all the branches in a series circuit. We have seen Voltage Division in Resisitor in 
      Series, where voltage is divided/drop across each resistor.
    </p>
    <p class="fst-italic ps-5">
      R = R<sub>1</sub> + R<sub>2</sub> (Equivalent Resistance = Sum of Resistance of Resistors connected in Series)<br>
      V = IR (Source voltage by Ohm's Law)<br>
      V = I(R<sub>1</sub> + R<sub>2</sub>) (Putting value of R as current remains same in series)<br>
      I = <sup>V</sup> / <sub>(R<sub>1</sub> + R<sub>2</sub>)</sub><br>
      V<sub>2</sub> = IR<sub>2</sub> (Voltage drop across R<sub>2</sub> resistor by Ohm's Law)<br>
      V<sub>2</sub> = <sup>VR<sub>2</sub></sup> / <sub>(R<sub>1</sub> + R<sub>2</sub>)</sub>
    </p>
    <p class="display-6">
      What is Capacitors?
    </p>
    <p>
      Capacitor are those passive components that store energy in the form of electric charges. It consists of two plates, separated by an non-conductive region. 
      Non-conductive region can either be a vacuum or an electrical insulator known as dielectric. It comes in variety of shapes and sizes. It attenuate the DC and 
      filters the AC. It can be used as batteries, sensing devices, to separate AC and DC and used in vehicle audio system, etc. It is represented by 'C' and 
      measured in farad (F).
    </p>
    <p class="fst-italic ps-5">
      V = <sup>Q</sup> / <sub>C</sub> (By Faraday's Law)
    </p>
    <p>
      where, V is voltage passed through capacitor, Q is charge stores in capacitor and C is the value of capacitance.
    </p>
    <p class="display-6">
      Common Types of Capacitors
    </div>
    <ol type="1">
      <li>
        Electrolytic Capacitor is used in DC power supply. Also, it is used in the application of coupling and decoupling to reduce the ripple voltage due to their 
        large capacitance values and their small size, like in Rectifiers.
      </li>
      <li>
        Ceramic Capacitor is also used in DC circuit but has long lifetime. It has labelled with 3 digit code that represents capacitor value in picofarad.
      </li>
      <li>
        Polypropylene Capacitor is useful in the circuit in which operating voltage are typically very high such as power amplifier, power supply circuit, etc. It 
        comes with range between 100pF to 10&#181F.
      </li>
    </ol>
    <p class="display-6">
      Capacitors in Series
    </p>
    <p>
      The charege across each capacitor in series is same. The reciprocal of the equivalent capacitance of two or more capacitors connected in series is the sum 
      of reciprocals of the individual capacitances.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/capacitors-in-series.png" alt="Capacitors in Series">
      <p class="fs-6">Capacitors in Series</p>
    </div>
    <p class="fst-italic ps-5">
      V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub><br>
      <sup>Q</sup> / <sub>Ceq</sub> 
      = <sup>Q</sup> / <sub>C<sub>1</sub></sub> + <sup>Q</sup> / <sub>C<sub>2</sub></sub> + <sup>Q</sup> / <sub>C<sub>3</sub></sub><br>
      <sup>1</sup> / <sub>Ceq</sub> 
      = <sup>1</sup> / <sub>C<sub>1</sub></sub> + <sup>1</sup> / <sub>C<sub>2</sub></sub> + <sup>1</sup> / <sub>C<sub>3</sub></sub>
    </p>
    <p class="display-6">
      Capacitors in Parallel
    </p>
    <p>
      The voltage across each capacitor in parallel is same. The equivalent capacitance of two or more capacitors connected in parallel is the sum of the 
      individual capacitances.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/capacitors-in-parallel.png" alt="Capacitors in Parallel">
      <p class="fs-6">Capacitors in Parallel</p>
    </div>
    <p class="fst-italic ps-5">
      Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub><br>
      VCeq = VC<sub>1</sub> + VC<sub>2</sub> + VC<sub>3</sub><br>
      Ceq = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub>
    </p>
    <p class="display-6">
      Inductor
    </div>
    <p>
      Inductor is a passive component which stores the electrical energy in the magnetical field when the electric current passes through it. It allows DC to 
      pass through it and block AC. It is used in devices which are used in application where AC ripples are not desirable. Such devices are transormer, 
      relays, induction motor, etc. It is represented by 'L' and measured in Henry.
    </p>
    <p class="display-6">
      Inductors in Series
    </p>
    <p>
      The differentiation of current w.r.t. time (<sup>dI</sup> / <sub>dt</sub>) is same through each inductor in series. The equivalent inductance of the circuit 
      is found by simply adding up the inductance values of the individual inductors.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/inductors-in-series.png" alt="Inductors in Series">
      <p class="fs-6">Inductors in Series</p>
    </div>
    <p class="fst-italic ps-5">
      V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub><br>
      V = <sup>dI</sup> / <sub>dt</sub>L<br>
      <sup>dI</sup> / <sub>dt</sub>Leq = <sup>dI</sup> / <sub>dt</sub>L<sub>1</sub> + <sup>dI</sup> / <sub>dt</sub>L<sub>2</sub> + 
      <sup>dI</sup> / <sub>dt</sub>L<sub>3</sub><br>
      Leq = L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub>
    </p>
    <p class="display-6">
      Inductors in Parallel
    </p>
    <p>
      The voltage across each inductor in parallel is same. The reciprocal of equivalent inductance of the circuit is found by simply adding up the reciprocals 
      of inductance values of the individual inductors.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/inductors-in-parallel.png" alt="Inductors in Parallel">
      <p class="fs-6">Inductors in Parallel</p>
    </div>
    <p class="fst-italic ps-5">
      I = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub><br>
      I = <sup>1</sup> / <sub>L</sub>&#8747Vdt<br> 
      <sup>1</sup> / <sub>Leq</sub>&#8747Vdt 
      = <sup>1</sup> / <sub>L<sub>1</sub></sub>&#8747Vdt + <sup>1</sup> / <sub>L<sub>2</sub></sub>&#8747Vdt + 
      <sup>1</sup> / <sub>L<sub>3</sub></sub>&#8747Vdt<br>
      <sup>1</sup> / <sub>Leq</sub>
      = <sup>1</sup> / <sub>L<sub>1</sub></sub> + <sup>1</sup> / <sub>L<sub>2</sub></sub> + 
      <sup>1</sup> / <sub>L<sub>3</sub></sub>
    </p>`,
  post3: `
    <p>
      Array is a mutable, non-dynamic and ordered sequence of homogeneus elements. We cannot directly use arrays in Python. We have to use Numpy to work with arrays. 
      Numpy is the most popular library (consists of built-in functions, modules, resources) of Python that deals with N - dimensional arrays (matrices). Numpy has 
      built-in functions for matrix addition, matrix multiplication and so on, that makes very easier to handle matrices. 
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <ol type="1" class="fst-italic ps-5">
      <li>
        import numpy as np # imports 'numpy' object of 'Numpy' module and giving short-name to 'numpy' as 'np'
      </li>
      <li>
        array = np.array((1, 2, 2, 3)) # create Numpy array by passing tuple and initialise to variable array
      </li>
      <li>
        array = np.array([1, 2, 2, 3]) # create Numpy array by passing list and initialise to variable array
      </li>
      <li>
        type(array) # type of variable array, i.e., &lt;class 'numpy.ndarray'&gt;
      </li>
      <li>
        list = [1, 2, 2, 3]<br>
        print(list, type(list)) # print list and type of list, i.e., [1, 2, 2, 3] &lt;class 'list'&gt;<br>
        print(array, type(array)) # print array and type of array, i.e., [1 2 2 3] &lt;class 'numpy.ndarray'&gt;
      </li>
      <li>
        np.array([[1, 2], [3, 4, 5], [6, 7, 8]]) # [list(1, 2) list(3, 4, 5) list(6, 7, 8)] 
        because all nested list is not of same length<br>
        np.array([[1, 2], [3, 4], [5, 6]]) # [[1 2] [3 4] [5 6]]
      </li>
      <li>
        np.zeros(3) # array  of length 3 of floated zeros, i.e., [0. 0. 0.]<br>
        np.zeros(3, dtype = np.int64) # array  of length 3 of integer zeros, i.e., [0 0 0]<br>
      </li>
      <li>
        np.ones(3, dtype = np.int64) # array  of length 3 of integer ones, i.e., [1 1 1]
      </li>
      <li>
        np.empty(2) # array of garbage value of length 2, i.e., [4.68140158e-310 9.88131292e-324] 
        because system either have defined value or garbaege value
      </li>
      <li>
        np.arange(5) # array of 5 elements, i.e., [0 1 2 3 4]<br>
        np.arange(1, 10, 2) # array from 1 to less than 10 with step value of 2, i.e., [1 3 5 7 9]
      </li>
      <li>
        np.random.randint(10, size = 5) # array of size of 5 of random integer between 1 and 10 [2 4 2 7 1]<br>
        np.random.rand(5) # array of size of 5 of random numbers between 0 and 1 
        [0.46882323 0.07866154 0.78295024 0.33775701 0.89994646]
      </li>
      <li>
        len(array) # returns length of array, i.e., 4
      </li>
      <li>
        np.unique(array) # returns array of unique values in array to vairable array, i.e., [1 2 3]
      </li>
      <li>
        unique_values, indices_list = np.unique(array, return_index = True)<br>
        print(unique_values, indices_list) # print unique array and their index position in original array
        [1 2 3] [0 1 3]
      </li>
      <li>
        unique_values, occurrence_counts = np.unique(array, return_counts = True)<br>
        print(unique_values, occurrence_counts) # print unique array and their count value in original array
        [1 2 3] [1 2 1]
      </li>
      <li>
        array = np.array([[1, 2], [3, 4], [5, 6]])<br>
        unique_values, occurrence_counts = np.unique(array, return_counts = True)<br>
        print(unique_values, occurrence_counts) # first nD array is flattened into 1D array then print unique 
        array and their count value in original array [1 2 3 4 5 6] [1 1 1 1 1 1]
      </li>
      <li>
        array.ndim # returns dimension of array, i.e., 2
      </li>
      <li>
        array.size # returns size of array, i.e., 6
      </li>
      <li>
        array.shape # returns shape of array, i.e., (3, 2)
      </li>
      <li>
        array.dtype # returns the type of elements in numpy array, i.e., int64<br>
      </li>
      <li>
        array = np.array([1, 2, 3], dtype = 'f') # dtype attribute type cast the elements of array to float32<br>
        print(array, array.dtype) # returns the array and type of elements in numpy array, i.e., [1. 2. 3.] float32
      </li>
      <li>
        array = np.array([1.5, 2.9, 3.1])<br>
        array = array.astype('i') # type cast the elements of array to int32<br>
        print(array, array.dtype) # returns the array and type of elements in numpy array, i.e., [1 2 3] int32
      </li>
      <li>
        array = np.float32([1, 2, 3]) # create numpy floated array from list of integers<br>
        print(array, array.dtype) # returns the array and type of elements in numpy array, i.e., [1. 2. 3.] float32
      </li>
      <li>
        array = np.int32([1.5, 2.1, 3.9]) # create numpy integer array from list of floated numbers<br>
        print(array, array.dtype) # returns the array and type of elements in numpy array, i.e., [1 2 3] int32
      </li>
      <li>
        array = np.int_([1.5, 2.1, 3.9]) # create numpy long integer array from list of floated numbers<br>
        print(array, array.dtype) # returns the array and type of elements in numpy array, i.e., [1 2 3] int64
      </li>
    </ol>`,
  post4: `
    <p class="display-6">
      Falstad Simulator
    </p>
    <p>
      Before actual implementation of any circuit, we always check their process and faults through at least one of the many electronic circuit simulators. 
      For our hands-on, we use <a href="http://falstad.com/circuit/circuitjs.html" target="_blank">Falstad Simulator</a>, which is web available simulator. 
      Below type window will be open.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/falstad-simulator-demo.png" alt="Falstad Simulator">
      <p class="fs-6">Falstad Simulator</p>
    </div>
    <ul>
      <li>
        Menu Bar (On top of Simulator)
        <ul>
          <li>
            File Menu (consist of basic file operations, such as New, Open, Import, Export, Print, etc)
          </li>
          <li>
            Edit Menu (consist of basic edit operations, such as Cut, Copy, Paste, Duplicate, Select All, Zoom In, Zoom Out, etc)
          </li>
          <li>
            Draw (consist of different components of electronic circuit, such as Wire, Resistor, LED, Voltmeter, DC Power Supply, etc)
          </li>
          <li>
            and many more menus
          </li>
        </ul>
      </li>
      <li>
        Control Panel (On right of Simulator)
        <ul>
          <li>
            Reset button (used to reset the simulator)
          </li>
          <li>
            Run / Stop button (run or stop the simulator)
          </li>
          <li>
            Simulation Speed bar(low / high the speed of simulation)
          </li>
          <li>
            Current Speed bar(low / high the speed of current in circuit designed in simulator)
          </li>
        </ul>
      </li>
      <li>
        Bottom panel (show the current, voltage, resistance, capacitance, inductance, time step (after what time, we get the output) etc.)
      </li>
      <li>
        Circuit panel (black screen in the middle is used to design and simulate the circuit)
      </li>
    </ul>
    <p>
      Each component must connected with each other through point-to-point connectoin, for proper simulation. To change the value of any component, right-click 
      on that component, then click on edit, then enter new value.
    </p>
    <p class="fw-bold fs-6">
      For examples:
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/resistor-in-series-on-falstad-simulator.png" alt="Resistor in Series on Falstad Simulator">
      <p class="fs-6">Resistor in Series on Falstad Simulator</p>
    </div>
    <div class="text-center">
      <img class="image-height" src="./images/foe/potentiometer-on-falstad-simulator.png" alt="Potentiometer on Falstad Simulator">
      <p class="fs-6">Potentiometer (Variable Resistor) on Falstad Simulator</p>
    </div>
    <div class="text-center">
      <img class="image-height" src="./images/foe/current-limited-resistor-on-falstad-simulator.png" alt="Current Limited Resistor on Falstad Simulator">
      <p class="fs-6">Current Limited Resistor on Falstad Simulator</p>
    </div>
    <div class="text-center">
      <img class="image-height" src="./images/foe/led-in-series-on-falstad-simulator.png" alt="LED in Series on Falstad Simulator">
      <p class="fs-6">LED in Series on Falstad Simulator</p>
    </div>`,
  post5: `
    <p>
      Active Components are those which required power to do work. They process or amplify any electrical signal. It includes amplifying components such as 
      transistors, diodes, LED, ICs, etc. They are uni-lateral, as they flow current in one direction. They are polarised in nature.
    </p>
    <p class="display-6">
      Diodes
    </p>
    <p>
      Diodes is a non-linear semi-conductor device that allows flow of current in one directon. It is a two terminal component and the two terminals are anode(+) 
      and cathode(-). The left side in below diagrams represents anode and the right side represents cathode. There are some commonly used applications of diode as:
    </p>
    <ol type="1" class="fst-italic">
      <li>
        PN Junction Diode is often used in AC to DC converter circuits, such as rectification circuit.
        <div class="text-center">
          <img class="image-height" src="./images/foe/pn-junction-diode.png" alt="Symbol of PN Juncton Diode">
          <p class="fs-6">Symbol of PN (P-type N-type) Juncton Diode</p>
        </div>
      </li>
      <li>
        LED (Ligh Emitting Diode) is similar to PN junction diode that emit light when activated, used in TV and smart phone backlighting, etc.
        <div class="text-center">
          <img class="image-height" src="./images/foe/led-symbol.png" alt="Symbol of LED">
          <p class="fs-6">Symbol of LED (Light Emitting Diode)</p>
        </div>
      </li>
      <li>
        Zener Diode is often used as voltage stabilizer, such as voltage regulator.
        <div class="text-center">
          <img class="image-height" src="./images/foe/zener-diode-symbol.png" alt="Symbol of Zener Diode">
          <p class="fs-6">Symbol of Zener Diode</p>
        </div>
      </li>
      <li>
        Schottky Diode is similar to PN junction diode but with less forward current and hence is often used in fast switching circuit.
        <div class="text-center">
          <img class="image-height" src="./images/foe/schottky-diode-symbol.png" alt="Symbol of Schottky Diode">
          <p class="fs-6">Symbol of Schottky Diode</p>
        </div>
      </li>
    </ol>
    <p class="display-6">
      Transistor
    </p>
    <p>
      Transistor is a semiconductor device that can be used either as switch electrical power or amplify electronic signal. It can be operate at three regions - 
      Cut-off Region (Transistor as a Switch), Active Region (Transistor as an Amplifier) and Saturation Region (Transistor as a Switch). It is three terminal device 
      that can either be a current controlled devie or voltage controlled device. Tansistors are further classified into BJT (Bipolar Junction Transistor) and FET 
      (Field Effect Transistor). BJT is current controlled device because output current (Collector current (I<sub>C</sub>)) is depend upon input current 
      (Base current (I<sub>B</sub>)). FET is voltage controlled device because output current is depend upon the voltage applied between Source and Drain.
    </p>
    <p class="display-6">
      BJT v/s JFET v/s MOSFET
    </p>
    <table class="table table-bordered align-middle">
      <tr>
        <th>BJT (Bipolar Junction Transistor)</th>
        <th>JFET (Junction Field Effect Transistor)</th>
        <th>MOSFET (Metal Oxide Semiconductor Field Effect Transistor)</th>
      </tr>
      <tr>
        <td><img src="./images/foe/bjt-symbol.png" alt="Symbol of Bipolar Junction Transistor"></td>
        <td><img src="./images/foe/jfet-symbol.jpg" alt="Symbol of Junction Field Effect Transistor"></td>
        <td><img src="./images/foe/mosfet-symbol.png" alt="Symbol of Metal Oxide Semiconductor Field Effect Transistor"></td>
      </tr>
      <tr>
        <td>It is current controlled device.</td>
        <td>It is voltage controlled device.</td>
        <td>It is voltage controlled device.</td>
      </tr>
      <tr>
        <td>It has low input impedance.</td>
        <td>It has higher input impedance than BJT.</td>
        <td>It has slightly higher input impedance than JFET.</td>
      </tr>
      <tr>
        <td>It is bipolar device because it has two polarity (majority and minority charge carriers).</td>
        <td>It is unipolar device because it has one polraity (majority charge carriers).</td>
        <td>It is unipolar device because it has one polraity (majority charge carriers).</td>
      </tr>
      <tr>
        <td>It requires more area on silicon chip.</td>
        <td>It requires less area on silicon chip.</td>
        <td>It requires less area on silicon chip.</td>
      </tr>
      <tr>
        <td>It requires more power to operate as compare to JFET and MOSFET.</td>
        <td>It requires less power to operate as compare to BJT.</td>
        <td>It requires less power to operate as compare to BJT.</td>
      </tr>
      <tr>
        <td>It has less power gain.</td>
        <td>It has high power gain, so it can be used as a power amplifier directly.</td>
        <td>It has high power gain, so it can also be used as a power amplifier directly.</td>
      </tr>
      <tr>
        <td>It has risk of thermal runaway, as it is current controlled device.</td>
        <td>It has no risk of thermal runaway</td>
        <td>It has no risk of thermal runaway.</td>
      </tr>
      <tr>
        <td>It produces more noise because it has both majority and minority charge carriers.</td>
        <td>It produces less noise.</td>
        <td>It produces less noise.</td>
      </tr>
      <tr>
        <td>It has two PN junction. (NP and PN in case of NPN-BJT)</td>
        <td>It has one PN junction. (NP in case of P-channel JFET)</td>
        <td>It has one PN junction. (NP in case of P-channel MOSFET)</td>
      </tr>
    </table>
    <p class="display-6">
      Transistor as Switch
    </p>
    <p>
      We can use Transistor as Switch in saturationa and cut-off region. Suppose potential barrier of transistor (made up of silicon) is 0.7V. When Vin is very small, 
      i.e., Vin &lt; 0.7V, then transistor is not switch on.
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/transistor-as-switch.png" alt="Transistor as Switch">
      <p class="fs-6">Transistor as Switch</p>
    </div>
    <p class="fst-italic ps-5">
      Vin = I<sub>B</sub>R<sub>B</sub> + V<sub>BE</sub><br>
      If I<sub>B</sub> = 0, then I<sub>C</sub> = 0<br>
      &#8756 Vout = Vcc<br>
      If Vin > 0.7V, then I<sub>B</sub> current flow through transistor that means transistor is switch on.<br>
      Vcc = I<sub>C</sub>R<sub>C</sub> + Vout<br>
      Vout = Vcc - I<sub>C</sub>R<sub>C</sub>
    </p>
    <p>
      Vin in high, Vout will low, that means transistor is ON and Vin is low, Vout will high, that means transistor is OFF. 
    </p>
    <div class="text-center">
      <img class="image-height" src="./images/foe/transistor-as-switch-graph.jpeg" alt="Graph representing Transistor as Switch">
      <p class="fs-6">Graph representing Transistor as Switch</p>
    </div>`,
  post6: `
    <p class="display-6">
      Reshaping Matrix
    </p>
    <p class="fst-italic ps-5">
      data = np.array([1, 2, 3, 4, 5, 6])<br>
      data.reshape((2, 3)) #returns [[1 2 3] [4 5 6]]
    </p>
    <p>
      reshape((1 , 2, ..., n)) reshape the array with specified value and product of values, specified as elements of tuple in parameter, must be equal to length 
      of original array.
    </p>
    <p class="display-6">
      Transposing Matrix
    </p>
    <p class="fst-italic ps-5">
      data = np.array([[1, 2, 3], [4, 5, 6]])<br>
      data.transpose() #returns [[1 4] [2 5] [3 6]]
    </p>
    <p>
      transpose() change the axes of array, i.e., row will be column and column will be row.
    </p>
    <p class="display-6">
      Sorting Array
    </p>
    <p class="fst-italic ps-5">
      arr = np.array([[5, 3], [4, 1], [6, 2]])<br>
      np.sort(arr) #returns the sorted arr in ascending order (row wise)(by default axis = 1), i.e., [[3 5] [1 4] [2 6]]
    </p>
    <p class="display-6">
      Concatenating Array
    </p>
    <p class="fst-italic ps-5">
      arr1 = np.array([[1, 2], [3, 4]])<br>
      arr2 = np.array([[5, 6], [7, 8]])<br>
      np.concatenate((arr1, arr2)) #returns the concatenated array, i.e., [[1 2] [3 4] [5 6] [7 8]]
    </p>
    <p class="display-6">
      Slicing Array
    </p>
    <p>
      Slicing is same as String slicing that we discussed in String module of 'Introduction to Python Programming' session of 'Python Basics'.
    </p>
    <p class="fst-italic ps-5">
      arr = np.array([[1, 2], [3, 4]])<br>
      arr[1][-1] # returns 4
    </p>
    <p class="display-6">
      Basic Operations on Array
    </p>
    <ol class="fst-italic ps-5" type="1">
      <li>
        arr = np.array([[1, 2], [3, 4]])<br>
        np.sum(arr) # returns sum of each elements in the arr, i.e., 10<br>
        np.sum(arr, axis = 0) # returns sum of each elements (column wise) in the arr, i.e., [4 6]<br>
        np.sum(arr, axis = 1) # returns sum of each elements (row wise) in the arr, i.e., [3 7]
      </li>
      <li>
        arr1 = np.array([[1, 2], [3, 4]])<br>
        arr2 = np.array([[5, 6], [7, 8]])<br>
        print(arr1 + arr2) # print sum of arr1 and arr2 (with same element position), i.e., [[6 8] [10 12]]<br>
        np.add(arr1, arr2) # returns sum of arr1 and arr2 (with same element position), i.e., [[6 8] [10 12]]
      </li>
      <li>
        arr1 = np.array([[1, 2], [3, 4]])<br>
        arr2 = np.array([[5, 6], [7, 8]])<br>
        print(arr1 - arr2) # print difference of arr2 from arr1 (with same element position), i.e., 
        [[-4 -4] [-4 -4]]<br>
        np.subtract(arr1, arr2) # returns difference of arr2 from arr1 (with same element position), i.e., 
        [[-4 -4] [-4 -4]]
      </li>
      <li>
        arr1 = np.array([[1, 2], [3, 4]])<br>
        arr2 = np.array([[5, 6], [7, 8]])<br>
        print(arr1 * arr2) # print multiply of arr1 and arr2 (with same element position), i.e., 
        [[5 12] [21 32]]<br>
        np.multiply(arr1, arr2) # returns multiply of arr1 and arr2 (with same element position), i.e., 
        [[5 12] [21 32]]
      </li>
      <li>
        arr1 = np.array([[1, 2], [3, 4]])<br>
        arr2 = np.array([[5, 6], [7, 8]])<br>
        print(arr1 / arr2) # print division of arr1 by arr2 (with same element position), i.e., 
        [[0.2 0.33333333] [0.42857143 0.5]]<br>
        np.divide(arr1, arr2) # returns division of arr1 by arr2 (with same element position), i.e., 
        [[0.2 0.33333333] [0.42857143 0.5]]
      </li>
      <li>
        arr = np.array([1, 2, 3, 4, 5, 6])<br>
        np.reciprocal(arr) # retruns the reciprocal of each elements in arr in form of array, i.e., 
        [1 0 0 0 0 0]
      </li>
      <li>
        arr = np.array([1, 2, 3, 4, 5, 6], dtype = 'f')<br>
        np.reciprocal(arr) # retruns the reciprocal of each elements in arr in form of array, i.e., 
        [1. 0.5 0.33333334 0.25 0.2 0.16666667]
      </li>
      <li>
        arr = np.array([1, 2, 3, 4, 5, 6])<br>
        np.power(arr, 2) # returns the power of each elements in arr, to 2, i.e., [1 4 9 16 25 36]
      </li>
      <li>
        arr = np.array([1, 2, 3, 4, 5, 6])<br>
        power = np.array([2, 2, 2, 3, 3, 3])<br>
        np.power(arr, power) # returns the power of each elements in arr, to elements in power 
        (with same element position), i.e., [1 4 9 64 125 216]
      </li>
      <li>
        arr = np.array([1, 2, 3, 4, 5, 6])<br>
        power = np.array([[2, 2, 2, 3, 3, 3], [3, 3, 3, 2, 2, 2]])<br>
        np.power(arr, power) # returns the power of each elements in arr, to elements in power 
        (with same element position), i.e., [[1 4 9 64 125 216] [1 8 27 16 25 36]]
      </li>
      <li>
        arr = np.array([[1, 2], [3, 4]])<br>
        arr.max() # returns maximum of the elements in arr, i.e., 4
      </li>
      <li>
        arr = np.array([[1, 2], [3, 4]])<br>
        arr.min() # returns minimum of the elements in arr, i.e., 1
      </li>
    </ol>
    <p class="display-6">
      Broadcasting
    </p>
    <p>
      Broadcastingis a mechanism that allows NumPy to perform operations on arrays of different shapes, as we have done in case of multiplication of two arrays 
      (multiplication happens with each elements of one array to each elements of another array).
    </p>
    <p class="fst-italic ps-5">
      arr = np.array([[1, 2], [3, 4]])<br>
      print(arr * 2) # print multiply of arr and 2, i.e., [[2 4] [6 8]]
    </p>
    <p class="display-6">
      Reversing Array
    </p>
    <p class="fst-italic ps-5">
      arr = np.array([[1, 2], [3, 4]])<br>
      np.flip(arr) # returns reverse of arr, i.e., [[4 3] [2 1]]
    </p>`,
  post7: `
    <p class="display-6">
      What is Linked List?
    </p>
    <p>
      When a list is connected or linked with another list in a certain way, its called Linked List. Linked List is a linear data structure, where the data stored in 
        the non-contiguous memory locations. Linked List can be picturised as,
    </p>
    <p class="display-6">
      Types of Linked List
    </p>
    <ol class="fst-italic" type="1">
      <li>Singly Linked List</li>
      <li>Doubly Linked List</li>
    </ol>
    <p class="display-6">
      Singly Linked List
    </p>
    <p class="fst-italic ps-5">
      | HEAD | => | DATA | NEXT | => | DATA | NEXT | => | DATA | NEXT | => | DATA | NEXT | => | DATA | NEXT | => | DATA | X |
    </p>
    <p>
      Singly Linked List is one way linked list. In above, | DATA | NEXT | represents a node that has two parts - left one stores actual data and right one stores address. 
      HEAD stores the address of first Node. Each NEXT stores and points the address of its next Node. DATA represents the actual data in every Node. X represents end 
      of the linked list, called NULL.
    </p>`,
  post9: `
    <p class="display-6">
      Doubly Linked List
    </p>
    <p class="fst-italic ps-5">
      | HEAD | &lt;=> | X | DATA | NEXT | &lt;=> | PREV | DATA | NEXT | &lt;=> | PREV | DATA | NEXT | &lt;=> | PREV | DATA | X | &lt;=> | TAIL |
    </p>
    <p>
      Doubly Linked List is two way linked list. In above, | PREV | DATA | NEXT | represents a node that has three parts - center one stores actual data, left and right 
      parts stores addresses. HEAD stores the address of first Node. TAIL stores the address of last Node. Each PREV stores and points the address of its previous Node. 
      Each NEXT stores and points the address of its next Node. DATA represents the actual data in every Node. X represents end of the linked list, called NULL.
    </p>
    <p class="display-6">
      Circular Linked List
    </p>
    <p class="fst-italic ps-5">
      | HEAD | => | DATA | NEXT | => | DATA | NEXT | => | DATA | NEXT | => | DATA | NEXT | => | DATA | NEXT | => | DATA | HEAD |
    </p>
    <p>
      Circular Linked List is one way circular linked list. In above, | DATA | NEXT | represents a node that has two parts - left one stores actual data and right 
      part stores address. HEAD stores the address of first Node. Each NEXT stores and points the address of its next Node. DATA represents the actual data in every Node.
    </p>`,
  post14: `
    <p class="display-6">
      If statements
    </p>
    <p class="fst-italic ps-5">
      if &lt;conditions&gt;:<br>
      &nbsp;&nbsp;#statements
    </p>
    <p class="display-6">
      If else statements
    </p>
    <p class="fst-italic ps-5">
      if &lt;conditions&gt;:<br>
      &nbsp;&nbsp;#statements<br>
      else:<br>
      &nbsp;&nbsp;#statements
    </p>
    <p class="display-6">
      If elseif statements
    </p>
    <p class="fst-italic ps-5">
      if &lt;conditions&gt;:<br>
      &nbsp;&nbsp;#statements<br>
      elif &lt;conditions&gt;:<br>
      &nbsp;&nbsp;#statements<br>
      else:<br>
      &nbsp;&nbsp;#statements
    </p>
    <p class="display-6">
      While loop
    </p>
    <p class="fst-italic ps-5">
      while &lt;conditions&gt;:<br>
      &nbsp;&nbsp;#statements<br>
      &nbsp;&nbsp;#value updation
    </p>
    <p class="display-6">
      For loop
    </p>
    <p class="fst-italic ps-5">
      for variable in range(start, end):<br>
      &nbsp;&nbsp;#statements
    </p>`,
  post15: `
    <p class="display-6">
      Reading Keyboard Inputs
    </p>
    <ul>
      <li>raw_input function gives exact value entered through keyboard</li>
      <li>input function gives manipulated result for value entered through keyboard</li>
    </ul>
    <p class="fst-italic ps-5">
      str = raw_input('Enter your name: ')<br>
      print(str)
    </p>
    <p class="fst-italic ps-5">
      str = input('Enter your name: ')<br>
      print(str)
    </p>
    <p class="display-6">
      File Input/Output Operations
    </p>
    <p class="fst-italic ps-5">
      f = open('test.text', 'r+')<br>
      str = f.read(10)<br>
      print(str)<br>
      f.close()
    </p>`,
  post17: `
    <p>
      Like other general-purpose programming languages, Python is also an object-oriented language since its beginning. It allows us to develop applications 
      using an Object-Oriented approach.
    </p>
    <p class="display-6">
      Properties of OOPS
    </p>
    <ul>
      <li>Class can be defined as a collection of objects.</li>
      <li>An object is a run-time entity that has state and behavior.</li>
      <li>By using inheritance, we can create a class which uses all the properties and behavior of another classes.</li>
      <li>By polymorphism, we understand that one task can be performed in different ways.</li>
      <li>In encapsulation, code and data are wrapped together within a single unit from being modified by accident.</li>
    </ul>
    <p class="display-6">
      Creation of Linked List using OOPS
    </p>
    <p class="fst-italic ps-5">
      class Node:<br>
      &nbsp;&nbsp;def __init__(self, data=None):<br>
      &nbsp;&nbsp;&nbsp;&nbsp;self.data = data<br>
      &nbsp;&nbsp;&nbsp;&nbsp;self.next = None<br>
      class SinglyLinkedList:<br>
      &nbsp;&nbsp;def __init__(self):
      &nbsp;&nbsp;&nbsp;&nbsp;self.head = None<br>
      list = SinglyLinkedList()<br>
      list.head = Node("Mon")<br>
      e2 = Node("Tue")<br>
      e3 = Node("Wed")<br>
      list.head.next = e2<br>
      e2.next = e3
    </p>`,
  post18: `
    <p>
      Pandas is an open-source library that is made mainly for working with relational or labeled data both easily and intuitively. It provides various data 
      structures and operations for manipulating numerical data and time series. This library is built on top of the NumPy library. Pandas is fast and it has 
      high performance & productivity for users.
    </p>
    <p class="display-6">
      Creating DataFrames using Pandas
    </p>
    <p class="fw-bold fs-6">
      Code:
    </p>
    <p class="fst-italic ps-5">
      import pandas as pd<br>
      df = pd.DataFrame()<br>
      print(df)<br>
      list = ['Hi!', 'This', 'is', 'IOT', 'Online', 'Blog']<br>
      df = pd.DataFrame(lst)<br>
      print(df)
    </p>
    <p class="fw-bold fs-6">
      Output:
    </p>
    <p class="fst-italic ps-5">
      0&nbsp;&nbsp;&nbsp;&nbsp;Hi!<br>
      1&nbsp;&nbsp;&nbsp;&nbsp;This<br>
      2&nbsp;&nbsp;&nbsp;&nbsp;is<br>
      3&nbsp;&nbsp;&nbsp;&nbsp;IOT<br>
      4&nbsp;&nbsp;&nbsp;&nbsp;Online<br>
      5&nbsp;&nbsp;&nbsp;&nbsp;Blog
    </p>`,
  post21: `
    <p>
      IOT stands for Internet of Things. IOT is a network of different things. The things can be a mobile app, web app or any interactive 
      application and also the things can be ICs, electronic components or any other embedded devices. IOT is not a single domain. It is 
      an eco-system. It includes electronics, clouds, internet, etc. IOT is all about resolving common problems with intelligence. As we know, 
      human error is more than machine error. So, we develop a machine or system that solve our problems with intelligence. LPG Gas Theft is 
      the common problem that anyone can have. We can check it with Gauge meter to measure pressure, Thermometer to measure temperature and 
      weighing machine to measure weight of cylinder. But measureing weight of cylinder is safest way among three to check if there is a 
      Gas Theft or not. This is how we can use IOT in our day-to-day life. The advancement of technology is necessary in our day-to-day life. 
      Similarly, the advancement of Blood Pressure (BP) machine from manual (analog) to digital, is necessary to reduce error. Because manual BP 
      machines causes human error.
    </p>`,
  post22: `
    <p>
      We discuss on nearby areas, where we can use IOT. Using TDS sensor to check the efficiency of TDS units in water purifiers. Save energy by 
      automating the power on/off of electronic devices in houses.
    </p>
    <div class="subheadin">Embedded Device v/s IOT</div>
    <p>
      Embedded Devices is a single device are but IOT is a web of clouds, electronics and many more devices. 
    </p>
    <div class="subheading">Internet of Things (IOT)</div>
    <p>
      IOT is a system of interrelated computing devices, mechanical and digital machines, objects, animals or peoples that are provided with 
      unique identifiers and the ability to transfer data over a network requiring human-to-human and human-to-computer interaction. We can use 
      IOT in Floor Irigation System. In Flood Irigation, crop needs to be submerged about 15 cm from ground, above it all the water is waste. For 
      1cm over a hectare, the volume comes out to be 100 cubic meters and 1 cubic meters is equals to 1000 litres. Collectively, there is 1 lakh 
      litres water wastage. If we spread IOT sensors in field area, it will collect water consumption data and through this we can control the 
      submersible motor and stop it after fulfilling the water requirement. That will save water. We can use IOT to check AQI (Air Quality 
      Index) through AQI sensor in different areas to make air less polluted.
    </p>
    <div class="subheading">Challenges in IOT</div>
    <ul>
      <li>
        Lack of Standards (Home Automation System has been implemented by differenct companies Samsung(Things), LG(Thinq), Google(Thread), Apple 
        in different ways (differenct platforms))
      </li>
      <li>Multi Disciplinary Domain (Collection of many collaborative technologies)</li>
      <li>Simulation (Simulation is not enought if we have large numbers of users. We can simulate some devices not all through sampling.)</li>
      <li>Security (Fault in protocol or in any device of network will cause threat)</li>
    </ul>
    <div class="subheading">Interfaces and Topologies</div>
    <ul>
      <li>
        Independent nodes or devices send their data to cloud and cloud collects data from various nodes. We generally use Cellular Communication for this topology.
      </li>
      <li>
        Multiple nodes, may be at different distances, send their data to single node in network and then this single node send Collectively data to the cloud. We can use hub/switch. 
        Hub collects data from various nodes/devices and send collectively data to the cloud. (Star Topology). We generally use Short-Range Wireless Communication (Bluetooth, Wifi) for 
        this topology.
      </li>
    </ul>
    <ul>
      <li>Cellular Communication has has high data rate , better range, consume high power.</li>
      <li>Short-Range Wireless Communication has average data rate , good range, consume less power.</li>
      <li>Long-Range Wireless Communication has slow data rate, high range, consume less power.</li>
    </ul>`,
  post86: `
    <p class="display-6">
      What is Cloud Computing?
    </p>
    <p>
      The practice of using a network of remote servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer. 
      Around hundreds of Zetabytes (ZB) stored on the cloud.
    </p>
    <p class="display-6">
      Types of Cloud Computing
    </p>
    <ol class="fst-italic" type="1">
      <li>Platform as a Service (PaaS) such as Microsoft Azure, Heroku.</li>
      <li>Software as a Service (SaaS) such as Google Docs, Cisco Webex.</li>
      <li>Infrastructure as a Service (IaaS) such as Digital Ocean, Amazon Web Services.</li>
      <li>Public Cloud services provides by companies to subscribers.</li>
      <li>Private Cloud services accessed by closed environment, single person or any organization.</li>
      <li>Hybrid Cloud based on private cloud but provides access to public cloud.</li>
    </ol>
    <div class="text-center">
      <img src="./images/cb/cloud-services-model.jpg" alt="Cloud Services Model" class="image-height">
      <p class="fs-6">Cloud Services Model</p>
    </div>
    <div class="text-center">
      <img src="./images/cb/shared-responsibility-model-in-cloud.jpg" alt="Shared Responsibility Model in Cloud" class="image-height">
      <p class="fs-6">Shared Responsibility Model in Cloud</p>
    </div>
    <p class="display-6">
      Benefits of Cloud Computing
    </p>
    <ul>
      <li>Reduce Cost "Pay as you go Model"</li>
      <li>Reduce Server Complexity</li>
      <li>More focus on development</li>
      <li>Accessibility and Reliability</li>
      <li>Scalability on demand</li>
      <li>Big Data Processing</li>
    </ul>`,
  post87: `
    <p class="display-6">
      What is Mosquitto?
    </p>
    <p>
      It is lightweight protocol implementation makes it suitable for full power machines, as well as for the low power and embedded ones.
    </p>
    <p class="display-6">
      What is MQTT?
    </p>
    <p>
      MQTT stands for Message Queue Telemetry Tranport. It is lightweight, publish-subscribe, machine to machine network protocol. It is designed with remote 
      locations that have devices with resource constraints or limited network bandwidth. Swiggy uses it for agent live tracking and Facebook uses it in their messengers.
    </p>
    <div class="text-center">
      <img src="./images/cb/mqtt-architecture.jpg" alt="MQTT Architecture" class="image-height">
      <p class="fs-6">MQTT Architecture</p>
    </div>
    <div class="text-center">
      <img src="./images/cb/mqtt-message-flow.jpg" alt="MQTT Message Flow" class="image-height">
      <p class="fs-6">MQTT Message Flow</p>
    </div>
    <div class="text-center">
      <img src="./images/cb/http-vs-mqtt.png" alt="HTTP vs MQTT" class="image-height-large">
      <p class="fs-6">HTTP vs MQTT</p>
    </div>
    <p class="display-6">
      Features of MQTT
    </p>
    <ul>
      <li>Simple to Implement</li>
      <li>Lightweight and Network Bandwidth Efficient</li>
      <li>Handle abnormat client disconnections</li>
      <li>Transfer any format of data such as binary, JSON, etc.</li>
      <li>Provides a Quality of Service (QOS)</li>
    </ul>
    <p class="display-6">
      Limitations of MQTT
    </p>
    <ul>
      <li>The structure of the published data is not known to the subscriber.</li>
      <li>MQTT uses TCP, which needs complex handshaking, as compare to UDP and is consume more power.</li>
      <li>Broker is centralised. Failure of it can fails the communication.</li>
      <li>MQTT has no built-in security. Developers need to implement security on their own.</li>
    </ul>
    <p>
      MQTT implementaion needs two kind of implementaions - Broker or Server Implementaion and Client Library Implementaion
    </p>
    <p>
      Eclipse Mosquitto, a MQTT broker implementaion, is about 120KB and requires 3MB RAM for 1000 clients connected.
    </p>
    <p>
      Eclipse Paho client offers a number of features - automatic reconnect, offline buffering, message persistence, WebSocket or TCP support, blocking or 
      non-blocking API and high availability. For embedded devices of limited resources, Paho offers an ANSI standard C compliant library.
    </p>`,
  post90: `
    <p class="display-6">
      What is Machine Learning?
    </p>
    <p>
      Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without 
      being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.
    </p>
    <p class="display-6">Types of Machine Learning</p>
    <ul>
      <li>
        Supervised Learning: Data scientists supply algorithms with labeled training data and define the variables they want the algorithm to assess for correlations. 
        Both the input and the output of the algorithm is specified.
      </li>
      <li>
        Unsupervise Learning uses algorithms that train on unlabeled data. The algorithm scans through data sets looking for any meaningful connection. The data that 
        algorithms train on as well as the predictions or recommendations they output are predetermined.
      </li>
      <li>
        Reinforcement Learning: Data scientists program an algorithm to complete a task and give it positive or negative cues as it works out how to complete a task. 
        But for the most part, the algorithm decides on its own what steps to take along the way.
      </li>
    </ul>`
};

let postData = [
  {
    title: postTitle[0],
    timestamp: '14 JAN 2022 9:00AM',
    topic: 'IOT Internship Orientation Session',
    content: content.post0,
    instructor: `Instructor: ${instructorName.rs} (Senior Mentor), ${instructorName.sk} (Mentor), ${instructorName.bdg} (Mentor), ${instructorName.bdg} (Mentor), Ms. Eknoor Kaur`
  },
  {
    title: postTitle[1],
    timestamp: '17 JAN 2022 8:00AM',
    topic: 'Introduction to Python Programming',
    content: content.post1,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[2],
    timestamp: '17 JAN 2022 10:00AM',
    topic: 'Introduction to Electronic Components',
    content: content.post2,
    instructor: `Instructor: ${instructorName.sk}`
  },
  {
    title: postTitle[1],
    timestamp: '18 JAN 2022 8:00AM',
    topic: 'Array with Numpy',
    content: content.post3,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[2],
    timestamp: '18 JAN 2022 10:00AM',
    topic: 'Hands-on on Passive Components',
    content: content.post4,
    instructor: `Instructor: ${instructorName.sk}`
  },
  {
    title: postTitle[2],
    timestamp: '19 JAN 2022 10:00AM',
    topic: 'Active Components',
    content: content.post5,
    instructor: `Instructor: ${instructorName.sk}`
  },
  {
    title: postTitle[1],
    timestamp: '20 JAN 2022 8:00am',
    topic: 'Array with Numpy (Contd...)',
    content: content.post6,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[1],
    timestamp: '21 JAN 2022 8:00am',
    topic: 'Linked List',
    content: content.post7,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[1],
    timestamp: '24 JAN 2022 8:00am',
    topic: 'Linked List (Contd...)',
    content: content.post9,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[1],
    timestamp: '27 JAN 2022 4:00pm',
    topic: 'Decision Making Statements, Loops and Functions',
    content: content.post14,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[1],
    timestamp: '28 JAN 2022 4:00pm',
    topic: 'Input / Output Functions',
    content: content.post15,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[1],
    timestamp: '31 JAN 2022 4:30pm',
    topic: 'Object Oriented Programming System',
    content: content.post17,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[1],
    timestamp: '01 FEB 2022 4:30pm',
    topic: 'Pandas',
    content: content.post18,
    instructor: `Instructor: ${instructorName.bdg}`
  },
  {
    title: postTitle[3],
    timestamp: '04 FEB 2022 8:00am',
    topic: 'Introduction to IOT',
    content: content.post21,
    instructor: `Instructor: ${instructorName.rs}`
  },
  {
    title: postTitle[3],
    timestamp: '07 FEB 2022 8:00am',
    topic: 'Challenges in IOT and IOT Infrastructure',
    content: content.post22,
    instructor: `Instructor: ${instructorName.rs}`
  },
  {
    title: postTitle[4],
    timestamp: '30 MAY 2022 8:00am',
    topic: 'Cloud Basics',
    content: content.post86,
    instructor: `Instructor: ${instructorName.sr}`
  },
  {
    title: postTitle[4],
    timestamp: '31 MAY 2022 8:00am',
    topic: 'MQTT and Mosquitto Basics',
    content: content.post87,
    instructor: `Instructor: ${instructorName.sr}`
  },
  {
    title: postTitle[7],
    timestamp: '07 JUN 2022 11:00am',
    topic: 'Introduction to Machine Learning',
    content: content.post90,
    instructor: `Instructor: ${instructorName.bdg}`
  }
];

let postTemplate = `
  <div class="row">
    <hr class="bg-primary border-2 border-top border-primary">
    <div class="row">
      <div class="col-md">
        <p class="post-title text-md-start text-center fs-5 m-0 text-info"></p>
      </div>
      <div class="col-md">
        <p class="post-timestamp text-md-end text-center fs-5 m-0 text-info"></p>
      </div>
    </div>
    <div class="row">
      <p class="post-topic text-center display-6 fw-bold text-danger"></p>
    </div>
    <div class="post-content row text-justify text-dark fs-5"></div>
    <div class="row">
      <p class="post-instructor text-end fs-6 text-secondary"></p>
    </div>
    <hr class="bg-primary border-2 border-bottom border-primary">
  </div>`;

let blogSelector = document.querySelector('#blog');
let sessionDateSelector = document.querySelector('#session-date');
let postTitleSelector;
let postTimestampSelector;
let postTopicSelector;
let postContentSelector;
let postInstructorSelector;

function matchDate(sessionDate, timestamp) {
  let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  let year = sessionDate.slice(0, 4);
  let mon = Number(sessionDate.slice(5, 7));
  mon = months[mon - 1];
  let day = sessionDate.slice(8, 10);
  let date = `${day} ${mon} ${year}`;
  let datestamp = timestamp.slice(0, 11);
  if(date === datestamp) {
    return true;
  }
  return false;
}

function selectPostHTML() {
  postTitleSelector = Array.from(document.querySelectorAll('.post-title')).pop();
  postTimestampSelector = Array.from(document.querySelectorAll('.post-timestamp')).pop();
  postTopicSelector = Array.from(document.querySelectorAll('.post-topic')).pop();
  postContentSelector = Array.from(document.querySelectorAll('.post-content')).pop();
  postInstructorSelector = Array.from(document.querySelectorAll('.post-instructor')).pop();
}

function addDataToPost(title, timestamp, topic, content, instructor) {
  postTitleSelector.innerHTML = title;
  postTimestampSelector.innerHTML = timestamp;
  postTopicSelector.innerHTML = topic;
  postContentSelector.innerHTML = content;
  postInstructorSelector.innerHTML = instructor;
}

window.addEventListener('load', () => {
  blog.innerHTML = '';
  for(let i = 0; i < postData.length; i++) {
    blog.innerHTML += postTemplate;
    selectPostHTML();
    addDataToPost(postData[i].title, postData[i].timestamp, postData[i].topic, postData[i].content, postData[i].instructor);
  }
});

// sessionDateSelector.addEventListener('change', () => {
//   blog.innerHTML = '';
//   let countSessions = 0;
//   for(let i = 0; i < postData.length; i++) {
//     if(matchDate(sessionDateSelector.value, postData[i].timestamp)) {
//       blog.innerHTML += postTemplate;
//       selectPostHTML();
//       addDataToPost(postData[i].title, postData[i].timestamp, postData[i].topic, postData[i].content, postData[i].instructor);
//       countSessions++;
//     }
//   }
//   if(!countSessions) {
//     blog.innerHTML += `<p class="text-dark fs-1 fst-italic fw-bold text-center p-3">No session that day.</p>`;
//   }
// });

