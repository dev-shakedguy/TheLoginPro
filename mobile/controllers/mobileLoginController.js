import { auth } from '../../utils/firebaseService.js';
import User from '../../models/User.js';

const mobileLogin = async (req, res) => {
	const { idToken } = req.body;
	try {
		const token = await auth.verifyIdToken(idToken);
		const userCredentials = await auth.getUser(token.uid);
		const user = User.fromFirebase(userCredentials);
		res.status(201).send(JSON.stringify(user));
	} catch (error) {
		res.status(401).json({ status: 'unauthorized' });
	}
};

export { mobileLogin };
