import React, { useState } from "react";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="section">
      <div className="section-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? "\u25B2" : "\u25BC"}</span>
      </div>
      {open && <div className="section-content">{children}</div>}
    </div>
  );
};

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className="points">
        <p>
          <strong>Your Points:</strong> 1045
        </p>
        <p>
          <strong>Points to Reach Next Level:</strong> 76
        </p>
      </div>

      <Section title="Mi información personal">
        <label>Name</label>
        <input type="text" placeholder="Jon Doe" />
        <label>Email</label>
        <input type="email" placeholder="john.doe@example.com" />
        <button>Save Changes</button>
      </Section>

      <Section title="Payment">
        <h4>Mi Invoices</h4>
        <div className="invoice">
          G-ICPT-20230426-157 <span>€0</span>
          <br />
          <small>Sep 24, 2023</small>
        </div>
        <div className="invoice">
          G-ICPT-20230410-157 <span>€0</span>
          <br />
          <small>Apr 6, 2023</small>
        </div>

        <h4>Tu plan actual</h4>
        <div className="plan-box">
          Gratis
          <br />
          <span>$0 / mes</span>{" "}
          <button className="cancel-btn">Cancelar plan</button>
        </div>

        <h4>Upgrade plan</h4>
        <div className="upgrade-options">
          <div className="plan-box">
            Pro
            <br />
            <span>$24 / mes</span> <button>Upgrade</button>
          </div>
          <div className="plan-box">
            Advance
            <br />
            <span>$45 / mes</span> <button>Upgrade</button>
          </div>
        </div>
      </Section>

      <Section title="Notificaciones">
        <div className="notification-box">
          <label className="notification-title">
            Avísame de los nuevos retos (1 al día)
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Notificación push
            </label>
            <label>
              <input type="checkbox" /> Email
            </label>
          </div>
        </div>

        <div className="notification-box">
          <label className="notification-title">
            Recordatorio de clase o taller (1 hora antes)
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Notificación push
            </label>
          </div>
        </div>

        <div className="notification-box">
          <label className="notification-title">
            Nuevos comentarios en mis relatos (solo el primero)
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Notificación push
            </label>
          </div>
        </div>

        <div className="notification-box">
          <label className="notification-title">
            Logros y desbloqueos (solo el primero por logro)
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Notificación push
            </label>
          </div>
        </div>

        <div className="notification-box">
          <label className="notification-title">
            Nuevos materiales del curso
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Email
            </label>
          </div>
        </div>

        <div className="notification-box">
          <label className="notification-title">
            Recordatorio diario para escribir
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Notificación push (elige la hora desde
              tu perfil)
            </label>
          </div>
        </div>

        <div className="notification-box">
          <label className="notification-title">
            Recordatorio diario para escribir
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Notificación push (elige la hora desde
              tu perfil)
            </label>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AccountSettings;
