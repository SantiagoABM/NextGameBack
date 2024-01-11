import Rols from "../models/Rol.model.js";
import Privacy from "../models/Privacy.model.js";
import Users from "../models/User.model.js"
import Servers from "../models/Servers.model.js";

export const createRols = async () => {
    try {
        // Count Documents
        const count = await Rols.estimatedDocumentCount();

        // check for existing roles
        if (count > 0) return;

        // Create default Roles
        const values = await Promise.all([
            new Rols({ name: "Moderator" }).save(),
            new Rols({ name: "Admin" }).save(),
            new Rols({ name: "Premium" }).save(),
        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

export const createServers = async () => {
    try {
        // Count Documents
        const count = await Servers.estimatedDocumentCount();

        // check for existing roles
        if (count > 0) return;

        // Create default Roles
        const values = await Promise.all([
            new Servers({ _id: 1, name: "Nort America", abreviature: "NA" }).save(),
            new Servers({ _id: 2, name: "South America", abreviature: "SA" }).save(),
            new Servers({ _id: 3, name: "Brasil", abreviature: "BR" }).save(),
            new Servers({ _id: 4, name: "West Cost", abreviature: "WC" }).save(),
        ]);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};
export const createPrivacy = async () => {
    try {
        // Count Documents
        const count = await Privacy.estimatedDocumentCount();

        // check for existing roles
        if (count > 0) return;

        // Create default Roles
        const values = await Promise.all([
            new Privacy({ _id: 1, name: "Public" }).save(),
            new Privacy({ _id: 2, name: "Hidden" }).save(),
            new Privacy({ _id: 3, name: "Private" }).save(),
        ]);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

export const createAdmin = async () => {
    // check for an existing admin user
    const userFound = await Users.findOne({ email: ADMIN_EMAIL });
    console.log(userFound);
    if (userFound) return;

    // get roles _id
    const rols = await Rols.find({ name: { $in: ["Admin", "Moderator", "Premium"] } });

    // create a new admin user
    const newUser = await User.create({
        username: ADMIN_USERNAME,
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        id_rol: rols.map((rol) => rol._id),
    });

    console.log(`new user created: ${newUser.email}`);
};

createRols();
createServers();
createPrivacy();
createRols();